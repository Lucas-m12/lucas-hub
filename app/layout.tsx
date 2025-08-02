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
  metadataBase: new URL('https://lucasmarinho.com.br'),
  title: {
    default: 'Lucas Marinho - Desenvolvedor Full Stack',
    template: '%s | Lucas Marinho - Desenvolvedor Full Stack'
  },
  description: 'Desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas. Criando soluções digitais inovadoras e experiências excepcionais.',
  keywords: [
    'desenvolvedor full stack',
    'desenvolvedor web brasil',
    'programador full stack',
    'react developer',
    'node.js developer',
    'typescript developer',
    'javascript developer',
    'web development',
    'sistemas de pagamento',
    'will bank developer',
    'react native developer',
    'flutter developer',
    'aws developer',
    'terraform developer',
    'desenvolvedor frontend',
    'desenvolvedor backend',
    'full stack brasil',
    'next.js developer',
    'postgresql developer'
  ],
  authors: [{ name: 'Lucas Marinho' }],
  creator: 'Lucas Marinho',
  alternates: {
    canonical: 'https://lucasmarinho.com.br',
    languages: {
      'pt-BR': 'https://lucasmarinho.com.br',
      'en-US': 'https://lucasmarinho.com.br/en',
      'x-default': 'https://lucasmarinho.com.br'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: 'https://lucasmarinho.com.br',
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
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
};

// Person JSON-LD Schema
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lucas Marinho",
  "givenName": "Lucas",
  "familyName": "Marinho",
  "jobTitle": "Software Engineer",
  "description": "Desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas, com experiência em sistemas de pagamento críticos.",
  "url": "https://lucasmarinho.com.br",
  "email": "lucasmarinhodasilva2@gmail.com",
  "image": "https://lucasmarinho.com.br/profile-image.jpg",
  "sameAs": [
    "https://github.com/lucas-m12",
    "https://linkedin.com/in/lucas-marinho12"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Will Bank",
    "url": "https://willbank.com.br"
  },
  "alumniOf": {
    "@type": "Organization",
    "name": "Universidade Federal de Alagoas"
  },
  "knowsAbout": [
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "AWS",
    "Payment Systems",
    "PostgreSQL",
    "Flutter",
    "Redis",
    "Terraform",
    "Next.js",
    "Full Stack Development",
    "Microservices",
    "System Architecture",
    "PIX",
    "Banking APIs",
    "Express.js",
    "NestJS",
    "Docker",
    "Kubernetes"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Software Engineer",
    "occupationLocation": {
      "@type": "Country",
      "name": "Brazil"
    }
  },
  "nationality": {
    "@type": "Country",
    "name": "Brazil"
  }
};

// BreadcrumbList JSON-LD Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://lucasmarinho.com.br"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://lucasmarinho.com.br#about"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Experience",
      "item": "https://lucasmarinho.com.br#experience"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "FAQ",
      "item": "https://lucasmarinho.com.br#faq"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Contact",
      "item": "https://lucasmarinho.com.br#contact"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="dark">
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema)
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}