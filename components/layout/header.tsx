'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/contexts/language-context';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navigation = [
  { key: 'nav.about', href: '#about' },
  // { key: 'nav.projects', href: '#projects' }, // Temporarily hidden
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.faq', href: '#faq' },
  { key: 'nav.contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-portfolio-bg/90 backdrop-blur-md border-b border-portfolio-divider'
          : 'bg-transparent'
      }`}
      role="banner"
      aria-label="Site header"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#"
              className="text-xl font-bold text-portfolio-text hover:text-portfolio-accent-blue focus-visible:text-portfolio-accent-blue focus-visible:outline-2 focus-visible:outline-portfolio-accent-blue transition-colors"
              aria-label="Lucas Marinho - Home"
            >
              Lucas Marinho
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar" aria-label="Main menu">
            {navigation.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-portfolio-text hover:text-portfolio-accent-blue focus-visible:text-portfolio-accent-blue focus-visible:outline-2 focus-visible:outline-portfolio-accent-blue focus-visible:outline-offset-2 transition-colors duration-200 relative group"
                role="menuitem"
                aria-label={`Navigate to ${t(item.key)} section`}
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-accent-blue transition-all duration-200 group-hover:w-full" />
              </motion.a>
            ))}
            
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-portfolio-text hover:text-portfolio-accent-blue hover:bg-portfolio-card focus-visible:ring-2 focus-visible:ring-portfolio-accent-blue focus-visible:ring-offset-2"
              aria-label={`Switch to ${language === 'pt' ? 'English' : 'Portuguese'} language`}
            >
              <Globe className="w-4 h-4 mr-2" />
              {language.toUpperCase()}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-portfolio-text hover:text-portfolio-accent-blue hover:bg-portfolio-card focus-visible:ring-2 focus-visible:ring-portfolio-accent-blue focus-visible:ring-offset-2"
              aria-label={`Switch to ${language === 'pt' ? 'English' : 'Portuguese'} language`}
            >
              <Globe className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-portfolio-text hover:text-portfolio-accent-blue hover:bg-portfolio-card focus-visible:ring-2 focus-visible:ring-portfolio-accent-blue focus-visible:ring-offset-2"
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-portfolio-card/95 backdrop-blur-md rounded-xl mt-2 mb-4 border border-portfolio-divider"
              id="mobile-menu"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-portfolio-text hover:text-portfolio-accent-blue focus-visible:text-portfolio-accent-blue focus-visible:outline-2 focus-visible:outline-portfolio-accent-blue focus-visible:outline-offset-2 transition-colors duration-200"
                    role="menuitem"
                    aria-label={`Navigate to ${t(item.key)} section`}
                  >
                    {t(item.key)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}