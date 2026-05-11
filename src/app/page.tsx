import Link from 'next/link';
import { ArrowRight, Building2, ChartNoAxesCombined, Compass, Sparkles } from 'lucide-react';
import { products, siteConfig } from '@/lib/site-content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const pillars = [
  {
    icon: <Building2 className="h-5 w-5 text-primary" />,
    title: 'Public-facing trust layer',
    description: 'A stable website that explains the brand, the offer, and the products in a client-friendly way.',
  },
  {
    icon: <ChartNoAxesCombined className="h-5 w-5 text-primary" />,
    title: 'Product-by-product growth',
    description: 'Each new product can launch with its own page first, then graduate into a working app experience.',
  },
  {
    icon: <Compass className="h-5 w-5 text-primary" />,
    title: 'Clear control model',
    description: 'One domain, one visual system, and a cleaner split between marketing pages and operational workspaces.',
  },
];

export default function Home() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-border/60 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_34%),linear-gradient(180deg,_hsl(var(--background)),_hsl(var(--secondary)))]">
        <div className="container py-24">
          <Badge className="rounded-full bg-primary/10 px-4 py-1 text-primary hover:bg-primary/10">
            {siteConfig.shortName} Platform Base
          </Badge>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
                Build the website once. Launch future property products from the same foundation.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                {siteConfig.name} is now structured to lead with a strong client-facing website while keeping matching workspaces ready for products like ValuVista and RenoScope.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-6">
                  <Link href="/products">
                    Explore products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                  <Link href="/contact">Plan your first client-facing release</Link>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden border-border/70 bg-card/90 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.7)]">
              <CardHeader className="border-b border-border/60 bg-secondary/45">
                <CardTitle className="text-xl">Website-to-workspace pattern</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 p-6 text-sm text-foreground/80">
                <div className="rounded-2xl border border-border/70 bg-background px-4 py-4">
                  1. Publish the public product page
                </div>
                <div className="rounded-2xl border border-border/70 bg-background px-4 py-4">
                  2. Keep the brand and UI identical
                </div>
                <div className="rounded-2xl border border-border/70 bg-background px-4 py-4">
                  3. Open the product workspace only when the workflow is real
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">How DPI should scale</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            The website becomes the base layer for every product you publish.
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
              Today&apos;s pages can become tomorrow&apos;s apps without changing the client experience.
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/products">View all product pages</Link>
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
              <p className="text-sm uppercase tracking-[0.24em] text-primary">Next release pattern</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                For each new app, publish the client page first and attach the workspace second.
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                That keeps the public site calm and trustworthy while giving you room to grow the app side in parallel under the same brand.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/contact">Shape the next product launch</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
