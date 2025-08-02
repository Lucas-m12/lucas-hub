'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/contexts/language-context';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Mail, MessageSquare, Users, Building2, Coffee } from 'lucide-react';

const contactReasons = [
  {
    icon: Building2,
    titleKey: 'contact.corporateOpportunities',
    descriptionKey: 'contact.corporateDesc',
    color: 'text-portfolio-accent-blue'
  },
  {
    icon: Users,
    titleKey: 'contact.professionalNetworking',
    descriptionKey: 'contact.networkingDesc',
    color: 'text-portfolio-accent-green'
  },
  {
    icon: MessageSquare,
    titleKey: 'contact.mentoringTalks',
    descriptionKey: 'contact.mentoringDesc',
    color: 'text-portfolio-accent-blue'
  },
  {
    icon: Coffee,
    titleKey: 'contact.technicalCollaborations',
    descriptionKey: 'contact.collaborationsDesc',
    color: 'text-portfolio-accent-green'
  }
];

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'lucasmarinhodasilva2@gmail.com',
    href: 'mailto:lucasmarinhodasilva2@gmail.com',
    color: 'hover:text-portfolio-accent-blue',
    primary: true
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'lucas-marinho12',
    href: 'https://linkedin.com/in/lucas-marinho12',
    color: 'hover:text-portfolio-accent-blue',
    primary: true
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'lucas-m12',
    href: 'https://github.com/lucas-m12',
    color: 'hover:text-portfolio-accent-green',
    primary: false
  }
];

// Enhanced ContactPoint JSON-LD Schema
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lucas Marinho",
  "jobTitle": "Software Engineer",
  "email": "lucasmarinhodasilva2@gmail.com",
  "url": "https://lucasmarinho.com.br",
  "worksFor": {
    "@type": "Organization",
    "name": "Will Bank"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "professional",
      "email": "lucasmarinhodasilva2@gmail.com",
      "availableLanguage": ["Portuguese", "English"],
      "areaServed": ["BR", "Global"],
      "serviceType": ["Software Development", "Technical Leadership", "System Architecture"]
    },
    {
      "@type": "ContactPoint",
      "contactType": "social media",
      "url": "https://linkedin.com/in/lucas-marinho12",
      "availableLanguage": ["Portuguese", "English"]
    },
    {
      "@type": "ContactPoint", 
      "contactType": "code repository",
      "url": "https://github.com/lucas-m12",
      "availableLanguage": ["English"]
    }
  ],
  "sameAs": [
    "https://linkedin.com/in/lucas-marinho12",
    "https://github.com/lucas-m12"
  ],
  "knowsAbout": [
    "React", "Node.js", "TypeScript", "AWS", "Payment Systems", 
    "Microservices", "Flutter", "PostgreSQL", "Redis", "Terraform"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressCountry": "BR"
  }
};

export function ContactSection() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="contact" className="portfolio-section bg-portfolio-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-portfolio-text mb-4"
            >
              {t('contact.newTitle')}
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-portfolio-accent-blue mb-6"
            >
              {t('contact.newSubtitle')}
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-portfolio-text/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t('contact.newDescription')}
            </motion.p>
          </div>

          {/* Contact Reasons Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {contactReasons.map((reason, index) => (
              <motion.div
                key={reason.titleKey}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="portfolio-card p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-portfolio-bg/50 ${reason.color} group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-portfolio-text mb-2">
                      {t(reason.titleKey)}
                    </h3>
                    <p className="text-portfolio-text/80 text-sm leading-relaxed">
                      {t(reason.descriptionKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            className="bg-portfolio-bg/30 rounded-2xl p-8 mb-12"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-portfolio-text text-center mb-8"
            >
              {t('contact.howToReach')}
            </motion.h3>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {contactLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`portfolio-card p-6 block group transition-all duration-300 ${
                      link.primary ? 'border-2 border-portfolio-accent-blue/20' : ''
                    }`}
                  >
                    <link.icon className={`w-8 h-8 mx-auto mb-3 text-portfolio-text/60 group-hover:scale-110 transition-all duration-300 ${link.color}`} />
                    <div className="text-center">
                      <div className="font-semibold text-portfolio-text group-hover:text-portfolio-accent-blue transition-colors mb-1">
                        {link.label}
                      </div>
                      <div className="text-sm text-portfolio-text/60">
                        {link.value}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 mx-auto mt-3 text-portfolio-text/40 group-hover:text-portfolio-accent-blue transition-colors" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Primary CTA */}
            <motion.div variants={itemVariants} className="text-center">
              <Button
                size="lg"
                className="portfolio-gradient text-white hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="mailto:lucasmarinhodasilva2@gmail.com">
                  <Mail className="mr-2 w-5 h-5" />
                  {t('contact.sendEmail')}
                </a>
              </Button>
              <p className="text-sm text-portfolio-text/60 mt-3">
                {t('contact.responseTime')}
              </p>
            </motion.div>
          </motion.div>

          {/* Professional Status */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {t('contact.availableNetworking')}
            </div>
            <p className="text-sm text-portfolio-text/60 max-w-2xl mx-auto">
              {t('contact.currentStatus')}
            </p>
          </motion.div>
        </motion.div>
        
        {/* ContactPoint JSON-LD Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contactSchema)
          }}
        />
      </div>
    </section>
  );
}