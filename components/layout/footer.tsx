'use client';

import { useLanguage } from '@/lib/contexts/language-context';
import { motion } from 'framer-motion';
import { Heart, MapPin, Mail, Linkedin, Github, ExternalLink, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { key: 'nav.about', href: '#about' },
  // { key: 'nav.projects', href: '#projects' }, // Temporarily hidden
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.faq', href: '#faq' },
  { key: 'nav.contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/lucas-marinho12',
    icon: Linkedin,
    color: 'hover:text-blue-400'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/lucas-m12',
    icon: Github,
    color: 'hover:text-green-400'
  },
  {
    name: 'Email',
    href: 'mailto:lucasmarinhodasilva2@gmail.com',
    icon: Mail,
    color: 'hover:text-portfolio-accent-blue'
  }
];

const quickInfo = {
  pt: {
    currentRole: 'Software Engineer @ Will Bank',
    location: 'São Paulo, Brasil',
    status: 'Disponível para networking',
    expertise: ['Fintech', 'Microsserviços', 'Liderança Técnica']
  },
  en: {
    currentRole: 'Software Engineer @ Will Bank',
    location: 'São Paulo, Brazil',
    status: 'Available for networking',
    expertise: ['Fintech', 'Microservices', 'Technical Leadership']
  }
};

export function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const info = quickInfo[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="bg-portfolio-card/40 border-t border-portfolio-divider" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-portfolio-text mb-2">
                  Lucas Marinho
                </h3>
                <p className="text-portfolio-accent-blue font-medium mb-2">
                  {info.currentRole}
                </p>
                <div className="flex items-center gap-2 text-portfolio-text/60 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{info.location}</span>
                </div>
              </div>

              <p className="text-portfolio-text/80 leading-relaxed mb-6 max-w-md">
                {language === 'pt'
                  ? 'Engenheiro de Software especializado em sistemas de pagamento críticos, arquitetura de microsserviços e liderança técnica. Apaixonado por criar soluções escaláveis que impactam milhões de usuários.'
                  : 'Software Engineer specialized in critical payment systems, microservices architecture, and technical leadership. Passionate about creating scalable solutions that impact millions of users.'
                }
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {info.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs bg-portfolio-accent-blue/20 text-portfolio-accent-blue rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {info.status}
              </div>
            </motion.div>

            {/* Quick Navigation */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-portfolio-text mb-4">
                {language === 'pt' ? 'Navegação' : 'Navigation'}
              </h4>
              <nav className="space-y-3">
                {navigation.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block text-portfolio-text/70 hover:text-portfolio-accent-blue focus-visible:text-portfolio-accent-blue focus-visible:outline-2 focus-visible:outline-portfolio-accent-blue focus-visible:outline-offset-2 transition-colors duration-200"
                  >
                    {t(item.key)}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Contact & Social */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-portfolio-text mb-4">
                {language === 'pt' ? 'Conecte-se' : 'Connect'}
              </h4>
              
              <div className="space-y-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-portfolio-text/70 ${social.color} focus-visible:outline-2 focus-visible:outline-portfolio-accent-blue focus-visible:outline-offset-2 transition-colors duration-200 group`}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="group-hover:underline">{social.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>

              {/* Quick Contact */}
              <Button
                size="sm"
                variant="outline"
                className="w-full border-portfolio-divider text-portfolio-text hover:bg-portfolio-accent-blue hover:text-white hover:border-portfolio-accent-blue"
                asChild
              >
                <a href="mailto:lucasmarinhodasilva2@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  {language === 'pt' ? 'Enviar Email' : 'Send Email'}
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-portfolio-divider/20 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 text-portfolio-text/60 text-sm"
            >
              <span>© {currentYear} Lucas Marinho.</span>
              <span>{t('footer.rights')}</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 text-portfolio-text/60 text-sm"
            >
              <div className="flex items-center gap-2">
                <span>{t('footer.made')}</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
                </motion.div>
                <span>{t('footer.in')}</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 hover:text-portfolio-accent-blue focus-visible:text-portfolio-accent-blue focus-visible:outline-2 focus-visible:outline-portfolio-accent-blue focus-visible:outline-offset-2 transition-colors cursor-pointer"
                aria-label={language === 'pt' ? 'Voltar ao topo' : 'Back to top'}
              >
                <ArrowUp className="w-4 h-4" />
                <span>{language === 'pt' ? 'Topo' : 'Top'}</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}