import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="https://storage.googleapis.com/digital-property-insights-assets/DPI%20Logo%20.png" alt="Digital Property Insights Logo" width={32} height={32} />
              <span className="text-lg font-bold">Digital Property Insights</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-Powered insights for the modern real estate market.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/valuvista" className="text-sm text-muted-foreground hover:text-primary transition-colors">ValuVista</Link>
              <Link href="/renoscope" className="text-sm text-muted-foreground hover:text-primary transition-colors">RenoScope</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Digital Property Insights. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
