'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = useCallback((key: string): string => {
    const translations = getTranslations(language);
    return translations[key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

function getTranslations(language: Language): Record<string, string> {
  if (language === 'en') {
    return {
      // Navigation
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.contact': 'Contact',
      
      // Hero Section
      'hero.greeting': 'Hello, I\'m',
      'hero.name': 'João Silva',
      'hero.title': 'Full Stack Developer',
      'hero.subtitle': 'I create modern and innovative digital solutions with focus on exceptional user experiences.',
      'hero.cta': 'View Projects',
      'hero.contact': 'Get in Touch',
      
      // About Section
      'about.title': 'About Me',
      'about.subtitle': 'Passionate developer focused on creating impactful solutions',
      'about.description': 'With over 5 years of experience in web development, I specialize in creating modern, scalable, and high-performance applications. My passion lies in transforming ideas into digital reality, always seeking the best practices and latest technologies.',
      'about.skills': 'Main Skills',
      
      // Projects Section
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Some of my recent work',
      'projects.viewMore': 'View More',
      'projects.liveDemo': 'Live Demo',
      'projects.sourceCode': 'Source Code',
      
      // Experience Section
      'experience.title': 'Professional Experience',
      'experience.subtitle': 'My career journey',
      
      // Contact Section
      'contact.title': 'Let\'s Work Together',
      'contact.subtitle': 'Ready to start your next project?',
      'contact.description': 'I\'m always open to discussing new opportunities and interesting projects. Let\'s create something amazing together!',
      'contact.email': 'Send Email',
      'contact.linkedin': 'LinkedIn',
      'contact.github': 'GitHub',
      
      // Footer
      'footer.rights': 'All rights reserved.',
      'footer.made': 'Made with',
      'footer.in': 'in Brazil',
    };
  }
  
  // Portuguese translations (default)
  return {
    // Navigation
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'João Silva',
    'hero.title': 'Desenvolvedor Full Stack',
    'hero.subtitle': 'Crio soluções digitais modernas e inovadoras com foco em experiências excepcionais.',
    'hero.cta': 'Ver Projetos',
    'hero.contact': 'Entre em Contato',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Desenvolvedor apaixonado por criar soluções impactantes',
    'about.description': 'Com mais de 5 anos de experiência em desenvolvimento web, me especializo em criar aplicações modernas, escaláveis e de alta performance. Minha paixão está em transformar ideias em realidade digital, sempre buscando as melhores práticas e tecnologias mais recentes.',
    'about.skills': 'Principais Habilidades',
    
    // Projects Section
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Alguns dos meus trabalhos recentes',
    'projects.viewMore': 'Ver Mais',
    'projects.liveDemo': 'Demo ao Vivo',
    'projects.sourceCode': 'Código Fonte',
    
    // Experience Section
    'experience.title': 'Experiência Profissional',
    'experience.subtitle': 'Minha jornada profissional',
    
    // Contact Section
    'contact.title': 'Vamos Trabalhar Juntos',
    'contact.subtitle': 'Pronto para começar seu próximo projeto?',
    'contact.description': 'Estou sempre aberto para discutir novas oportunidades e projetos interessantes. Vamos criar algo incrível juntos!',
    'contact.email': 'Enviar Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.made': 'Feito com',
    'footer.in': 'no Brasil',
  };
}