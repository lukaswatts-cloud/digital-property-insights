import Image from 'next/image';
import Link from 'next/link';
import type { ProductDefinition } from '@/lib/site-content';
import { SiteImages } from '@/lib/site-images';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductPageTemplateProps {
  product: ProductDefinition;
}

export function ProductPageTemplate({ product }: ProductPageTemplateProps) {
  const heroImage = SiteImages.find((img) => img.id === product.heroImageId);

  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-border/60 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_35%),linear-gradient(180deg,_hsl(var(--background)),_hsl(var(--secondary)))]">
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(90deg,rgba(14,165,233,0.18),rgba(15,23,42,0))]" />
        <div className="container relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl space-y-7">
            <Badge className="rounded-full bg-primary/10 px-4 py-1 text-primary hover:bg-primary/10">
              {product.shortName}
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
                {product.name}
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-foreground/75">
                {product.tagline}
              </p>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                {product.summary}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href={product.appHref}>{product.appLabel}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <Link href="/contact">
                  Request a walkthrough <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.audience.map((item) => (
                <Badge key={item} variant="secondary" className="rounded-full px-3 py-1">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden border-border/70 bg-card/80 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.7)]">
            <div className="border-b border-border/60 bg-muted/60 px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Client-facing product page</p>
                  <p className="text-sm text-muted-foreground">Designed to match the live workspace</p>
                </div>
                <Badge variant="outline" className="rounded-full">
                  {product.appStatus}
                </Badge>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-secondary">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-white/70">DPI Product Surface</p>
                <p className="mt-2 max-w-md text-lg font-medium">
                  Public story first, workspace second, both held inside the same visual system.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="container grid gap-6 py-16 lg:grid-cols-3">
        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Sparkles className="h-5 w-5 text-primary" />
              What clients see
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            {product.outcomes.map((outcome) => (
              <div key={outcome} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{outcome}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/70 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Platform fit</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {product.capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-2xl border border-border/70 bg-secondary/40 p-4 text-sm text-foreground/80"
              >
                {capability}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="container">
        <Card className="overflow-hidden border-border/70 bg-[linear-gradient(135deg,rgba(14,165,233,0.08),rgba(15,23,42,0.02))]">
          <CardContent className="flex flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-primary">Parallel experience model</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Keep the public page and the workspace visually aligned.
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                This product is structured so the website page leads the story and the workspace continues it using the same typography, color language, and layout rhythm.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href={product.appHref}>{product.appLabel}</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
