import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, GaugeCircle, AreaChart, Search, ArrowRight } from 'lucide-react';
import { SiteImages } from '@/lib/site-images';
import { ValuationForm } from '@/components/valuvista/valuation-form';

const valuvistaMockup = SiteImages.find(img => img.id === 'valuvista-mockup');

const features = [
  {
    icon: <GaugeCircle className="h-8 w-8 text-primary" />,
    title: "Instant AVM",
    description: "Get automated valuation models in seconds, powered by our sophisticated AI engine."
  },
  {
    icon: <AreaChart className="h-8 w-8 text-primary" />,
    title: "Market Trend Analysis",
    description: "Analyze historical data and future projections to understand market dynamics."
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Comparable Analysis",
    description: "Find and compare similar properties with our advanced filtering and matching algorithms."
  }
];

const benefits = [
  "Win more listings with data-backed pricing strategies.",
  "Save hours of manual research and analysis.",
  "Advise clients with confidence using reliable market insights.",
  "Identify undervalued properties and investment opportunities."
];

export default function ValuVistaPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">ValuVista: AI-Powered Property Valuation</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Experience the future of real estate appraisal. Enter a property address below to receive an instant, data-rich valuation report powered by our advanced AI.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
           <ValuationForm />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1 space-y-4">
             <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">Benefits</div>
            <h2 className="text-3xl font-bold tracking-tight">Work Smarter, Not Harder</h2>
            <p className="text-muted-foreground">
              Empower your real estate business with the efficiency and accuracy of ValuVista.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
           <div className="order-1 md:order-2">
            <Card>
              <CardHeader>
                <CardTitle>For Agents, Brokers, and Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether you're pricing a new listing, advising a buyer, or assessing an investment, ValuVista provides the critical data points you need to act with confidence. Our intuitive dashboard makes complex data easy to understand and present to clients.
                </p>
              </CardContent>
            </Card>
           </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight">Ready to See ValuVista in Action?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Schedule a personalized demo with one of our product experts and discover how ValuVista can revolutionize your workflow.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact?subject=ValuVista+Demo">Schedule Your Free Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
