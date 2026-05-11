import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SiteImages } from '@/lib/site-images';
import { products, siteConfig } from '@/lib/site-content';
import { Button } from '@/components/ui/button';

const logo = SiteImages.find(img => img.id === 'company-logo');

export default function Footer() {
  return (
    <footer className="border-t bg-[linear-gradient(180deg,rgba(248,250,252,0.94),rgba(241,245,249,0.96))]">
      <div className="container py-14">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
          <div className="flex flex-col items-start gap-5">
            <Link href="/" className="flex items-center space-x-2 focus:outline-none">
              <div className="relative h-8 w-8">
                {logo && <Image src={logo.imageUrl} alt={logo.description} fill sizes="32px" className="object-contain" />}
              </div>
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              {siteConfig.mission}
            </p>
            <Button asChild className="rounded-full">
              <Link href="/contact">
                Request a demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Products</h4>
            <nav className="flex flex-col gap-3">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={product.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {product.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products Hub</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Focus</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Digital Property Insights is focused on practical property products that help clients make better decisions.</p>
              <p>As new apps are released, they can be featured here with the right product context and support material.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
