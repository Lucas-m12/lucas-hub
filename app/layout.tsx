import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/contexts/language-context';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'João Silva - Desenvolvedor Full Stack',
    template: '%s | João Silva - Desenvolvedor Full Stack'
  },
  description: 'Desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas. Criando soluções digitais inovadoras e experiências excepcionais.',
  keywords: ['desenvolvedor full stack', 'react', 'node.js', 'typescript', 'javascript', 'web development'],
  authors: [{ name: 'João Silva' }],
  creator: 'João Silva',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: 'https://joaosilva.dev',
    siteName: 'João Silva - Portfolio',
    title: 'João Silva - Desenvolvedor Full Stack',
    description: 'Desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'João Silva - Desenvolvedor Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'João Silva - Desenvolvedor Full Stack',
    description: 'Desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="dark">
      <head>
        <link rel="canonical" href="https://joaosilva.dev" />
        <link rel="alternate" hrefLang="pt" href="https://joaosilva.dev" />
        <link rel="alternate" hrefLang="en" href="https://joaosilva.dev/en" />
        <link rel="alternate" hrefLang="x-default" href="https://joaosilva.dev" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}