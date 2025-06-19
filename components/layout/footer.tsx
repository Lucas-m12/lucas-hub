'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/lib/contexts/language-context';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-card/30 border-t border-portfolio-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="portfolio-divider mb-6" />
          
          <p className="text-portfolio-text/60 mb-4">
            © {currentYear} João Silva. {t('footer.rights')}
          </p>
          
          <div className="flex items-center justify-center text-portfolio-text/60">
            <span>{t('footer.made')}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-2"
            >
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            </motion.div>
            <span>{t('footer.in')}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}