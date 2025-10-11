"use client";

import { useState } from 'react';
import type { ValuationReport, ValuationInput } from '@/ai/flows/valuvista-flow';
import { getValuationReport } from '@/ai/flows/valuvista-flow';
import { ValuationForm } from '@/components/valuvista/valuation-form';
import { ValuationReportDisplay } from '@/components/valuvista/report';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">ValuVista AI</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Enter a property address to generate an instant AI-powered valuation report.
          </p>
        </header>

        <main>
          <ValuationForm onSubmit={handleGenerateReport} isLoading={isLoading} />
          
          {error && (
            <Alert variant="destructive" className="mt-8">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error Generating Report</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {isLoading && (
            <div className="mt-8 space-y-6">
              <Skeleton className="h-12 w-1/3 mx-auto" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Skeleton className="h-40 w-full" />
                <Skeleton className="h-40 w-full" />
              </div>
              <Skeleton className="h-80 w-full" />
              <Skeleton className="h-80 w-full" />
            </div>
          )}

          {report && !isLoading && (
            <div className="mt-12">
              <ValuationReportDisplay report={report} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}