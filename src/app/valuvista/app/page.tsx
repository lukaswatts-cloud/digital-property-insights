"use client";

import { useState } from 'react';
import { Terminal } from 'lucide-react';
import type { ValuationReport, ValuationInput } from '@/ai/flows/valuvista-flow';
import { getValuationReport } from '@/ai/flows/valuvista-flow';
import { ProductAppShell } from '@/components/marketing/product-app-shell';
import { ValuationForm } from '@/components/valuvista/valuation-form';
import { ValuationReportDisplay } from '@/components/valuvista/report';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { getProductBySlug } from '@/lib/site-content';

const product = getProductBySlug('valuvista');

export default function ValuVistaAppPage() {
  const [report, setReport] = useState<ValuationReport | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateReport = async (input: ValuationInput) => {
    setIsLoading(true);
    setError(null);
    setReport(null);
    try {
      const result = await getValuationReport(input);
      setReport(result);
    } catch (e: any) {
      console.error(e);
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!product) {
    return null;
  }

  return (
    <ProductAppShell
      product={product}
      title="ValuVista Workspace"
      description="This workspace is where the public ValuVista story becomes an interactive client-ready experience. It keeps the same visual identity as the product page while holding the deeper analysis workflow."
      sidebarTitle="Workspace modules"
      sidebarItems={[
        'Property input and photo capture',
        'AI valuation report generation',
        'Comparable sales storytelling',
        'Future client dashboard and export flows',
      ]}
    >
      <div className="mx-auto max-w-5xl space-y-8">
        <ValuationForm onSubmit={handleGenerateReport} isLoading={isLoading} />

        {error && (
          <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error Generating Report</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {isLoading && (
          <div className="space-y-6">
            <Skeleton className="h-12 w-1/3" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-40 w-full" />
            </div>
            <Skeleton className="h-80 w-full" />
            <Skeleton className="h-80 w-full" />
          </div>
        )}

        {report && !isLoading && <ValuationReportDisplay report={report} />}
      </div>
    </ProductAppShell>
  );
}
