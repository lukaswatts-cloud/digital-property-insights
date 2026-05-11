import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/site-content';
import { ProductPageTemplate } from '@/components/marketing/product-page-template';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductsPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-border/60 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_35%),linear-gradient(180deg,_hsl(var(--background)),_hsl(var(--secondary)))]">
        <div className="container py-20">
          <Badge className="rounded-full bg-primary/10 px-4 py-1 text-primary hover:bg-primary/10">
            DPI Product Hub
          </Badge>
          <div className="mt-6 max-w-4xl space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              One website foundation. Multiple client-facing product surfaces.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              Each Digital Property Insights product starts with a polished public page, then grows into a matching workspace when the workflow is ready.
            </p>
          </div>
        </div>
      </section>

      <section className="container grid gap-6 py-14 md:grid-cols-2">
        {products.map((product) => (
          <Card key={product.slug} className="border-border/70 bg-card/90">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <Badge variant="outline" className="rounded-full">
                  {product.appStatus}
                </Badge>
                <span className="text-sm text-muted-foreground">{product.shortName}</span>
              </div>
              <CardTitle className="text-2xl">{product.name}</CardTitle>
              <p className="text-sm leading-7 text-muted-foreground">{product.tagline}</p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                {product.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-2xl bg-secondary/50 px-4 py-3 text-sm text-foreground/80">
                    {outcome}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-full">
                  <Link href={product.href}>{product.ctaLabel}</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href={product.appHref}>
                    {product.appLabel} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
