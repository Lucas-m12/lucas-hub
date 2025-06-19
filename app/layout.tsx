import { LanguageProvider } from '@/lib/contexts/language-context';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Lucas Marinho - Desenvolvedor Full Stack',
    template: '%s | Lucas Marinho - Desenvolvedor Full Stack'
  },
  description: 'Desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas. Criando soluções digitais inovadoras e experiências excepcionais.',
  keywords: ['desenvolvedor full stack', 'react', 'node.js', 'typescript', 'javascript', 'web development'],
  authors: [{ name: 'Lucas Marinho' }],
  creator: 'Lucas Marinho',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: 'https://joaosilva.dev',
    siteName: 'Lucas Marinho - Portfolio',
    title: 'Lucas Marinho - Desenvolvedor Full Stack',
    description: 'Desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lucas Marinho - Desenvolvedor Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Marinho - Desenvolvedor Full Stack',
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
        <link rel="canonical" href="https://lucasmarinho.com.br" />
        <link rel="alternate" hrefLang="pt" href="https://lucasmarinho.com.br" />
        <link rel="alternate" hrefLang="en" href="https://lucasmarinho.com.br" />
        <link rel="alternate" hrefLang="x-default" href="https://lucasmarinho.com.br" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}