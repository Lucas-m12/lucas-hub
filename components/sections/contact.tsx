'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/contexts/language-context';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'contact.email',
    href: 'mailto:lucasmarinhodasilva2@gmail.com',
    color: 'hover:text-portfolio-accent-blue',
  },
  {
    icon: Linkedin,
    label: 'contact.linkedin',
    href: 'https://linkedin.com/in/lucas-marinho12',
    color: 'hover:text-portfolio-accent-blue',
  },
  {
    icon: Github,
    label: 'contact.github',
    href: 'https://github.com/lucas-m12',
    color: 'hover:text-portfolio-accent-green',
  },
];

export function ContactSection() {
  const { t } = useLanguage();

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
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-portfolio-text mb-4"
          >
            {t('contact.title')}
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-portfolio-accent-blue mb-6"
          >
            {t('contact.subtitle')}
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-portfolio-text/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t('contact.description')}
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-3 gap-6 mb-12"
          >
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
                  className="portfolio-card p-6 block group transition-all duration-300"
                >
                  <link.icon className={`w-8 h-8 mx-auto mb-4 text-portfolio-text/60 group-hover:scale-110 transition-all duration-300 ${link.color}`} />
                  <span className="text-portfolio-text group-hover:text-portfolio-accent-blue transition-colors">
                    {t(link.label)}
                  </span>
                  <ExternalLink className="w-4 h-4 mx-auto mt-2 text-portfolio-text/40 group-hover:text-portfolio-accent-blue transition-colors" />
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="portfolio-gradient text-white hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="mailto:lucasmarinhodasilva2@gmail.com">
                <Mail className="mr-2 w-5 h-5" />
                {t('contact.email')}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}