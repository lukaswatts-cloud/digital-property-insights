import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText, ClipboardCheck, BarChart, ArrowRight, User, HardHat, Home } from 'lucide-react';
import { SiteImages } from '@/lib/site-images';

const renoScopeMockup = SiteImages.find(img => img.id === 'renoscope-mockup');

const howItWorksSteps = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "1. Input Property Details",
    description: "Provide basic information about the property you're planning to renovate."
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    title: "2. Define Renovation Scope",
    description: "Select from a wide range of renovation projects, from kitchens to full remodels."
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "3. Get Instant Insights",
    description: "Receive detailed cost estimates, projected ROI, and added property value."
  }
];

const targetAudience = [
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Homeowners",
    description: "Plan your dream renovation with a clear budget and understanding of value."
  },
  {
    icon: <User className="h-10 w-10 text-primary" />,
    title: "Flippers & Investors",
    description: "Identify the most profitable renovations to maximize your investment returns."
  },
  {
    icon: <HardHat className="h-10 w-10 text-primary" />,
    title: "Contractors",
    description: "Provide clients with accurate quotes and demonstrate the value of their projects."
  }
];


export default function RenoScopePage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">RenoScope: Plan Renovations with Confidence</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Take the guesswork out of renovations. RenoScope provides data-driven cost estimates and ROI analysis to help you make smarter decisions.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact?subject=RenoScope+Inquiry">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              In three simple steps, you can go from idea to a fully costed renovation plan with projected returns.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  {step.icon}
                  <CardTitle className="mt-4">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">Visualize Your ROI</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">Maximize Your Property's Potential</h2>
            <p className="mt-4 text-muted-foreground">
              RenoScope's powerful analytics help you understand the financial impact of every decision. See which upgrades add the most value and create a budget that aligns with your goals.
            </p>
             <div className="mt-6">
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/valuvista">
                  See our Valuation Tool <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
             {renoScopeMockup && (
              <Image
                src={renoScopeMockup.imageUrl}
                alt={renoScopeMockup.description}
                width={800}
                height={600}
                className="object-cover"
                data-ai-hint={renoScopeMockup.imageHint}
              />
            )}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Who It's For</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              RenoScope is designed for anyone involved in improving property value.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {targetAudience.map((audience, index) => (
              <div key={index} className="text-center p-6 border rounded-lg">
                <div className="flex justify-center mb-4">{audience.icon}</div>
                <h3 className="text-xl font-semibold">{audience.title}</h3>
                <p className="mt-2 text-muted-foreground">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight">Start Planning Your Next Profitable Renovation</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Sign up today and turn your renovation ideas into a data-driven plan for success.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact?subject=RenoScope+Inquiry">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
