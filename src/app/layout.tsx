import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/language-context';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppFAB from '@/components/whatsapp-fab';
import { TooltipProvider } from '@/components/ui/tooltip';

const siteUrl = 'https://bymiminestore.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bymiminestore - Modern Crochet Boutique',
    template: `%s | Bymiminestore`,
  },
  description: 'Discover unique, handmade crochet creations, from clothing to accessories. Woven with love by Bymiminestore.',
  keywords: ['crochet', 'handmade', 'bymiminestore', 'crochet clothing', 'crochet accessories', 'maroc', 'morocco', 'fait main'],
  openGraph: {
    title: 'Bymiminestore - Modern Crochet Boutique',
    description: 'Discover unique, handmade crochet creations, from clothing to accessories. Woven with love by Bymiminestore.',
    url: siteUrl,
    siteName: 'Bymiminestore',
    locale: 'fr_MA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bymiminestore - Modern Crochet Boutique',
    description: 'Discover unique, handmade crochet creations, from clothing to accessories. Woven with love by Bymiminestore.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased bg-background text-foreground min-h-screen')}>
        <LanguageProvider>
          <TooltipProvider>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <WhatsAppFAB />
            <Toaster />
          </TooltipProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
