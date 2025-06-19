'use client';

import { useLanguage } from '@/lib/contexts/language-context';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: {
      pt: 'Engenheiro de Software',
      en: 'Software Engineer',
    },
    company: 'Will Bank',
    location: 'Remote',
    period: '2022 - Presente',
    description: {
      pt: 'Atuação em sistemas de pagamento críticos, como boletos, débito em conta e recargas de celular, com foco em performance, segurança e resiliência',
      en: 'Development of critical payment systems, such as bank slips, direct debit and mobile top-ups, with focus on performance, security and resilience.',
    },
    technologies: ['Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Flutter', 'Redis', 'Terraform'],
  },
  {
    id: 2,
    title: {
      pt: 'Desenvolvedor Frontend Pleno',
      en: 'Frontend Developer',
    },
    company: 'Phooto',
    location: 'Remote',
    period: '2020 - 2022',
    description: {
      pt: 'Desenvolvi e mantive aplicações web focando em performance e experiência do usuário. Implementei soluções de e-commerce e gráfica.',
      en: 'Developed and maintained web applications focusing on performance and user experience. Implemented e-commerce solutions and graphics.',
    },
    technologies: ['React', 'Node.js', 'TypeScript', 'Canvas'],
  },
  {
    id: 3,
    title: {
      pt: 'Desenvolvedor Web',
      en: 'Web Developer',
    },
    company: 'Práxis Gestão Escolar',
    location: 'Cajueiro - AL',
    period: '2019 - 2020',
    description: {
      pt: 'Desenvolvimento sistemas web e mobile para clientes da area de gestão escolar, com foco em performance e experiência do usuário.',
      en: 'Development of web and mobile systems for clients in the education management area, focusing on performance and user experience.',
    },
    technologies: ['PHP', 'MySQL', 'React Native', 'REST APIs'],
  },
];

export function ExperienceSection() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="experience" className="portfolio-section">
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
            {t('experience.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-portfolio-text/80 max-w-2xl mx-auto"
          >
            {t('experience.subtitle')}
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-accent-blue via-portfolio-accent-green to-portfolio-accent-blue" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-portfolio-accent-blue rounded-full border-4 border-portfolio-bg z-10" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="portfolio-card p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-portfolio-text mb-2">
                          {experience.title[language]}
                        </h3>
                        <div className="flex items-center text-portfolio-accent-blue mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center text-portfolio-text/60 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-portfolio-text/80 mb-4 leading-relaxed">
                      {experience.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-portfolio-bg/50 text-portfolio-text/80 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}