'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import { useLanguage } from '@/lib/contexts/language-context';

const skills = [
  {
    icon: Code,
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: 'text-portfolio-accent-blue',
  },
  {
    icon: Database,
    title: 'Backend',
    technologies: ['Node.js', 'PostgreSQL', 'MongoDB', 'API REST'],
    color: 'text-portfolio-accent-green',
  },
  {
    icon: Globe,
    title: 'DevOps',
    technologies: ['Docker', 'AWS', 'Vercel', 'CI/CD'],
    color: 'text-portfolio-accent-blue',
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    technologies: ['React Native', 'Expo', 'Flutter', 'PWA'],
    color: 'text-portfolio-accent-green',
  },
];

export function AboutSection() {
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
    <section id="about" className="portfolio-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-portfolio-text mb-4"
          >
            {t('about.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-portfolio-text/80 max-w-2xl mx-auto"
          >
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-portfolio-accent-blue to-portfolio-accent-green mx-auto lg:mx-0 mb-8"
            />
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-portfolio-text/90 leading-relaxed"
            >
              {t('about.description')}
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-portfolio-text mb-6">
                {t('about.skills')}
              </h3>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="portfolio-card p-6 group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-portfolio-bg/50 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-portfolio-text mb-2">
                      {skill.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-sm bg-portfolio-bg/50 text-portfolio-text/80 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}