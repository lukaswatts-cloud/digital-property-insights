"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Building2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/valuvista', label: 'ValuVista' },
  { href: '/renoscope', label: 'RenoScope' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();

  const NavLink = ({ href, label, isMobile = false }: { href: string; label: string; isMobile?: boolean }) => {
    const isActive = pathname === href;
    const linkClasses = cn(
      "transition-colors hover:text-primary",
      isActive ? "text-primary font-semibold" : "text-foreground/60",
      isMobile ? "text-lg py-2" : "text-sm font-medium"
    );

    const Wrapper = isMobile ? SheetClose : 'div';

    return (
      <Wrapper asChild>
        <Link href={href} className={linkClasses}>
          {label}
        </Link>
      </Wrapper>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">
            Digital Property Insights
          </span>
        </Link>
        
        <nav className="hidden flex-1 md:flex md:items-center md:justify-center md:gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center justify-end md:flex-1 space-x-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Get a Demo</Link>
          </Button>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                     <Link href="/" className="flex items-center space-x-2">
                        <Building2 className="h-6 w-6 text-primary" />
                        <span className="font-bold">DPI</span>
                     </Link>
                     <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col gap-4 mt-6">
                    {navLinks.map((link) => (
                      <NavLink key={link.href} {...link} isMobile />
                    ))}
                    <Button asChild className="mt-4">
                        <Link href="/contact">Get a Demo</Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
