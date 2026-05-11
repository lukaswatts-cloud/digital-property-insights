import Link from 'next/link';
import type { ReactNode } from 'react';
import type { ProductDefinition } from '@/lib/site-content';
import { ArrowLeft, LayoutGrid, LockKeyhole, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductAppShellProps {
  product: ProductDefinition;
  eyebrow?: string;
  title: string;
  description: string;
  sidebarTitle: string;
  sidebarItems: string[];
  children: ReactNode;
}

export function ProductAppShell({
  product,
  eyebrow = 'Workspace',
  title,
  description,
  sidebarTitle,
  sidebarItems,
  children,
}: ProductAppShellProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[linear-gradient(180deg,rgba(248,250,252,0.96),rgba(255,255,255,1))]">
      <section className="border-b border-border/60 bg-background/90">
        <div className="container py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="ghost" size="sm" className="rounded-full">
                <Link href={product.href}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to product page
                </Link>
              </Button>
              <Badge variant="outline" className="rounded-full">
                {product.appStatus}
              </Badge>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
                <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
                <p className="max-w-3xl text-base leading-7 text-muted-foreground">{description}</p>
              </div>
              <Card className="border-border/70">
                <CardContent className="space-y-4 p-5">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <LockKeyhole className="h-4 w-4 text-primary" />
                    Consistent DPI surface
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <LayoutGrid className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Uses the same layout language as the public product page.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Ready to evolve into a client-facing or internal workflow without changing the brand shell.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-8 py-10 lg:grid-cols-[280px_1fr]">
        <Card className="h-fit border-border/70 bg-secondary/35">
          <CardContent className="space-y-4 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {sidebarTitle}
            </h2>
            <div className="space-y-3">
              {sidebarItems.map((item) => (
                <div key={item} className="rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground/80">
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div>{children}</div>
      </section>
    </div>
  );
}
