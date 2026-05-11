import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Digital Property Insights',
  description: 'Unlock the Future of Real Estate with AI-Powered Insights',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow px-4 sm:px-6 lg:px-8">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
