import Link from 'next/link';
import { ArrowRight, Building2, ChartNoAxesCombined, Compass, Sparkles } from 'lucide-react';
import { products, siteConfig } from '@/lib/site-content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const pillars = [
  {
    icon: <Building2 className="h-5 w-5 text-primary" />,
    title: 'Clearer property decisions',
    description: 'Use purpose-built digital tools to move from uncertainty to clear next steps on value, scope, and strategy.',
  },
  {
    icon: <ChartNoAxesCombined className="h-5 w-5 text-primary" />,
    title: 'Practical intelligence',
    description: 'Bring together valuation thinking, renovation planning, and market insight in one connected environment.',
  },
  {
    icon: <Compass className="h-5 w-5 text-primary" />,
    title: 'Products that keep growing',
    description: 'Each released app gets a supporting product presence so clients can understand what it does and how to use it.',
  },
];

export default function Home() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-border/60 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_34%),linear-gradient(180deg,_hsl(var(--background)),_hsl(var(--secondary)))]">
        <div className="container py-24">
          <Badge className="rounded-full bg-primary/10 px-4 py-1 text-primary hover:bg-primary/10">
            Digital Property Insights
          </Badge>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
                Smarter property decisions, supported by practical digital tools.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                {siteConfig.name} brings together client-facing property products designed to support valuation, renovation planning, and better investment conversations.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-6">
                  <Link href="/products">
                    Explore products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                  <Link href="/contact">Talk with us</Link>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden border-border/70 bg-card/90 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.7)]">
              <CardHeader className="border-b border-border/60 bg-secondary/45">
                <CardTitle className="text-xl">What Digital Property Insights offers</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 p-6 text-sm text-foreground/80">
                <div className="rounded-2xl border border-border/70 bg-background px-4 py-4">
                  1. Property valuation support
                </div>
                <div className="rounded-2xl border border-border/70 bg-background px-4 py-4">
                  2. Renovation planning tools
                </div>
                <div className="rounded-2xl border border-border/70 bg-background px-4 py-4">
                  3. Product-led digital experiences as new tools are released
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">Why clients use DPI</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Built to support the real decisions people make around property.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="border-border/70 bg-card/90">
              <CardHeader className="space-y-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                  {pillar.icon}
                </div>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-muted-foreground">
                {pillar.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Current products</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Explore the products currently shaping the Digital Property Insights suite.
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/products">View all products</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Card key={product.slug} className="border-border/70 bg-card/90">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="outline" className="rounded-full">
                    {product.appStatus}
                  </Badge>
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <p className="text-sm leading-7 text-muted-foreground">{product.summary}</p>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {product.audience.map((audience) => (
                    <Badge key={audience} variant="secondary" className="rounded-full">
                      {audience}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-full">
                    <Link href={product.href}>{product.ctaLabel}</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href={product.appHref}>{product.appLabel}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container pt-10">
        <Card className="overflow-hidden border-border/70 bg-[linear-gradient(135deg,rgba(14,165,233,0.08),rgba(15,23,42,0.02))]">
          <CardContent className="flex flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-primary">Work with us</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                See what is available now, and stay close to what is released next.
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                As Digital Property Insights releases new products, each one will be featured here with the right information, product context, and access path.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/contact">Request a conversation</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
