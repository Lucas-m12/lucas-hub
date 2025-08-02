'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Building, TrendingUp, Users, Code, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/contexts/language-context';
import { Button } from '@/components/ui/button';

const stats = [
  {
    value: '5+',
    labelKey: 'hero.stat1.label',
    icon: Code,
    color: 'text-portfolio-accent-green'
  },
  {
    value: '20+',
    labelKey: 'hero.stat2.label',
    icon: TrendingUp,
    color: 'text-portfolio-accent-blue'
  },
  {
    value: '3',
    labelKey: 'hero.stat3.label',
    icon: Users,
    color: 'text-portfolio-accent-green'
  }
];

const highlights = [
  { highlightKey: 'hero.highlight1' },
  { highlightKey: 'hero.highlight2' },
  { highlightKey: 'hero.highlight3' }
];

export function HeroSection() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 1.2,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-bg via-portfolio-bg/95 to-portfolio-card/50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-portfolio-accent-blue/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.4],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-portfolio-accent-green/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-portfolio-accent-blue/5 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Main Content */}
          <div className="text-center lg:text-left">

            <motion.p
              variants={itemVariants}
              className="text-portfolio-accent-blue font-medium text-lg mb-4"
            >
              {t('hero.greeting')}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-text mb-6 leading-tight"
            >
              <span className="block">{t('hero.name')}</span>
              <span className="block text-transparent bg-clip-text portfolio-gradient">
                {t('hero.title')}
              </span>
            </motion.h1>

            {/* Current Position */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <div className="flex items-center gap-2 text-portfolio-text/80">
                <Building className="w-5 h-5 text-portfolio-accent-blue" />
                <span className="font-semibold">Software Engineer @ Will Bank</span>
              </div>
              <div className="w-1 h-1 bg-portfolio-text/40 rounded-full" />
              <div className="flex items-center gap-2 text-portfolio-text/60">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, BR</span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-portfolio-text/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              {highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-portfolio-card/50 text-portfolio-text/80 rounded-lg text-sm font-medium border border-portfolio-divider/30"
                >
                  {t(highlight.highlightKey)}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                size="lg"
                className="portfolio-gradient text-white hover:opacity-90 transition-opacity group"
                asChild
              >
                <a href="#experience">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-portfolio-divider text-portfolio-text hover:bg-portfolio-card group"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  {t('hero.contact')}
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Stats & Visual Side */}
          <div className="relative">
            {/* Stats Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 mb-8 lg:mb-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.value}
                  variants={floatingVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="portfolio-card p-6 text-center group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent-blue/5 to-portfolio-accent-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
                    <div className="text-3xl font-bold text-portfolio-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-portfolio-text/60">
                      {t(stat.labelKey)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Floating Visual Element */}
            <motion.div
              variants={floatingVariants}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="hidden lg:block absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-portfolio-accent-blue/20 to-portfolio-accent-green/20 rounded-2xl backdrop-blur-sm border border-portfolio-divider/20"
            >
              <div className="absolute inset-4 bg-gradient-to-br from-portfolio-accent-blue/30 to-portfolio-accent-green/30 rounded-xl" />
              <div className="absolute inset-8 bg-gradient-to-br from-portfolio-accent-blue/40 to-portfolio-accent-green/40 rounded-lg" />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="text-xs text-portfolio-text/60 mb-2">
            {t('hero.scrollToExplore')}
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown className="w-6 h-6 text-portfolio-accent-blue mx-auto hover:scale-110 transition-transform" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}