import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, GaugeCircle, AreaChart, Search, ArrowRight } from 'lucide-react';
import { SiteImages } from '@/lib/site-images';

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
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Experience the future of real estate appraisal. ValuVista provides instant, accurate, and transparent property valuations to empower your decisions.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact?subject=ValuVista+Demo">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tight">The Most Advanced Valuation Tool on the Market</h2>
            <p className="text-muted-foreground">
              ValuVista combines millions of data points with machine learning to provide valuations you can trust. Explore the features that set us apart.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div>{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
            {valuvistaMockup && (
              <Image
                src={valuvistaMockup.imageUrl}
                alt={valuvistaMockup.description}
                width={800}
                height={600}
                className="object-cover"
                data-ai-hint={valuvistaMockup.imageHint}
              />
            )}
          </div>
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
            <div className="pt-4">
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/about">
                  Discover Our Mission <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
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
