import Link from 'next/link';
import { ArrowRight, Calculator, ClipboardList, TrendingUp } from 'lucide-react';
import { ProductAppShell } from '@/components/marketing/product-app-shell';
import { getProductBySlug } from '@/lib/site-content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const product = getProductBySlug('renoscope');

const cards = [
  {
    title: 'Scope Builder',
    description: 'Create a renovation brief that can later become a client-facing intake workflow.',
    icon: <ClipboardList className="h-5 w-5 text-primary" />,
  },
  {
    title: 'Budget Framing',
    description: 'Organize renovation choices into simple cost bands ready for future modeling.',
    icon: <Calculator className="h-5 w-5 text-primary" />,
  },
  {
    title: 'ROI Storyline',
    description: 'Prepare the narrative layer that explains why particular upgrades matter.',
    icon: <TrendingUp className="h-5 w-5 text-primary" />,
  },
];

export default function RenoScopeAppPage() {
  if (!product) {
    return null;
  }

  return (
    <ProductAppShell
      product={product}
      eyebrow="Workspace ready"
      title="RenoScope Workspace"
      description="RenoScope now has a matching workspace shell ready to evolve beside the public product page. This keeps the visual language consistent while leaving room for the real renovation workflow to be built in stages."
      sidebarTitle="Planned workspace areas"
      sidebarItems={[
        'Renovation brief capture',
        'Scope and trade categories',
        'Cost and uplift estimates',
        'Future client report handoff',
      ]}
    >
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} className="border-border/70">
              <CardHeader className="space-y-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                  {card.icon}
                </div>
                <CardTitle className="text-xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-muted-foreground">
                {card.description}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/70 bg-[linear-gradient(135deg,rgba(14,165,233,0.08),rgba(15,23,42,0.02))]">
          <CardContent className="flex flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                The public product page is live first. The deeper workflow can be attached here next.
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                This gives you a controlled path to build RenoScope without exposing unfinished workflow logic on the main website.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full">
                <Link href={product.href}>Review public page</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/contact">
                  Plan next build step <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ProductAppShell>
  );
}
