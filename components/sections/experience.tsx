'use client';

import { useLanguage } from '@/lib/contexts/language-context';
import { motion } from 'framer-motion';
import { Award, Building, Calendar, Code, ExternalLink, MapPin, TrendingUp, Users } from 'lucide-react';

const experiences = [
  {
    id: 1,
    titleKey: 'experience.willbank.title',
    company: 'Will Bank',
    companyUrl: 'https://willbank.com.br',
    location: 'São Paulo - SP (Remote)',
    period: '2022 - Presente',
    duration: '2+ anos',
    employmentTypeKey: 'experience.willbank.employmentType',
    startDate: '2022-01-01',
    descriptionKey: 'experience.willbank.description',
    responsibilityKeys: [
      'experience.willbank.resp1',
      'experience.willbank.resp2',
      'experience.willbank.resp3',
      'experience.willbank.resp4',
      'experience.willbank.resp5',
      'experience.willbank.resp6',
      'experience.willbank.resp7'
    ],
    achievementKeys: [
      'experience.willbank.achievement1',
      'experience.willbank.achievement2',
      'experience.willbank.achievement3',
      'experience.willbank.achievement4',
      'experience.willbank.achievement5',
    ],
    technologies: ['Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Flutter', 'Redis', 'Terraform', 'Docker', 'Microservices', 'Datadog'],
    skillKeys: [
      'experience.willbank.skill1',
      'experience.willbank.skill2',
      'experience.willbank.skill3',
      'experience.willbank.skill4'
    ],
    companyInfoKey: 'experience.willbank.companyInfo',
    current: true
  },
  {
    id: 2,
    titleKey: 'experience.phooto.title',
    company: 'Phooto',
    companyUrl: undefined,
    location: 'São Paulo - SP (Remote)',
    period: '2020 - 2022',
    duration: '2 anos',
    employmentTypeKey: 'experience.phooto.employmentType',
    startDate: '2020-03-01',
    endDate: '2022-01-01',
    descriptionKey: 'experience.phooto.description',
    responsibilityKeys: [
      'experience.phooto.resp1',
      'experience.phooto.resp2',
      'experience.phooto.resp3',
      'experience.phooto.resp4',
      'experience.phooto.resp5',
      'experience.phooto.resp6'
    ],
    achievementKeys: [
      'experience.phooto.achievement1',
      'experience.phooto.achievement2',
      'experience.phooto.achievement3',
      'experience.phooto.achievement4',
      'experience.phooto.achievement5',
      'experience.phooto.achievement6'
    ],
    technologies: ['React', 'TypeScript', 'Canvas API', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'AWS S3'],
    skillKeys: [
      'experience.phooto.skill1',
      'experience.phooto.skill2',
      'experience.phooto.skill3',
      'experience.phooto.skill4'
    ],
    companyInfoKey: 'experience.phooto.companyInfo',
    current: false
  },
  {
    id: 3,
    titleKey: 'experience.praxis.title',
    company: 'Práxis Gestão Escolar',
    companyUrl: undefined,
    location: 'Cajueiro - AL',
    period: '2019 - 2020',
    duration: '1 ano',
    employmentTypeKey: 'experience.praxis.employmentType',
    startDate: '2019-06-01',
    endDate: '2020-03-01',
    descriptionKey: 'experience.praxis.description',
    responsibilityKeys: [
      'experience.praxis.resp1',
      'experience.praxis.resp2',
      'experience.praxis.resp3',
      'experience.praxis.resp4',
      'experience.praxis.resp5',
      'experience.praxis.resp6'
    ],
    achievementKeys: [
      'experience.praxis.achievement1',
      'experience.praxis.achievement2',
      'experience.praxis.achievement3',
      'experience.praxis.achievement4',
      'experience.praxis.achievement5',
      'experience.praxis.achievement6'
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'React Native', 'jQuery', 'REST APIs'],
    skillKeys: [
      'experience.praxis.skill1',
      'experience.praxis.skill2',
      'experience.praxis.skill3',
      'experience.praxis.skill4'
    ],
    companyInfoKey: 'experience.praxis.companyInfo',
    current: false
  }
];

// WorkExperience JSON-LD Schema
const generateWorkExperienceSchema = (experiences: any[], t: (key: string) => string) => {
  return experiences.map(exp => ({
    "@type": "WorkExperience",
    "jobTitle": t(exp.titleKey),
    "employer": {
      "@type": "Organization",
      "name": exp.company,
      "url": exp.companyUrl,
      "description": t(exp.companyInfoKey)
    },
    "startDate": exp.startDate,
    "endDate": exp.endDate || (exp.current ? undefined : new Date().toISOString().split('T')[0]),
    "jobLocation": {
      "@type": "Place",
      "name": exp.location
    },
    "description": t(exp.descriptionKey),
    "skills": exp.technologies.join(', '),
    "employmentType": t(exp.employmentTypeKey)
  }));
};

export function ExperienceSection() {
  const { language, t } = useLanguage();
  
  // Generate WorkExperience schema for current language
  const workExperienceSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lucas Marinho",
    "hasOccupation": generateWorkExperienceSchema(experiences, t)
  };

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

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="portfolio-card overflow-hidden group relative"
            >
              {/* Current Job Badge */}
              {experience.current && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                  {t('experience.current')}
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-portfolio-accent-blue/20 rounded-xl">
                        <Building className="w-6 h-6 text-portfolio-accent-blue" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-portfolio-text mb-2 group-hover:text-portfolio-accent-blue transition-colors">
                          {t(experience.titleKey)}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg font-semibold text-portfolio-accent-blue">
                            {experience.company}
                          </span>
                          {experience.companyUrl && (
                            <ExternalLink className="w-4 h-4 text-portfolio-text/60 hover:text-portfolio-accent-blue transition-colors cursor-pointer" />
                          )}
                        </div>
                        <p className="text-sm text-portfolio-text/60 mb-3">
                          {t(experience.companyInfoKey)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Meta Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-portfolio-text/70">
                        <Calendar className="w-4 h-4 text-portfolio-accent-green" />
                        <span>{experience.period} ({experience.duration})</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-portfolio-text/70">
                        <MapPin className="w-4 h-4 text-portfolio-accent-green" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-portfolio-text/70">
                        <Users className="w-4 h-4 text-portfolio-accent-green" />
                        <span>{t(experience.employmentTypeKey)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-portfolio-text/80 leading-relaxed mb-6">
                  {t(experience.descriptionKey)}
                </p>

                {/* Two Column Layout for Responsibilities and Achievements */}
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-portfolio-text mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-portfolio-accent-blue" />
                      {t('experience.keyResponsibilities')}
                    </h4>
                    <ul className="space-y-2">
                      {experience.responsibilityKeys.map((responsibilityKey: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-portfolio-text/80">
                          <div className="w-1.5 h-1.5 bg-portfolio-accent-blue rounded-full mt-2 flex-shrink-0" />
                          <span>{t(responsibilityKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-portfolio-text mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-portfolio-accent-green" />
                      {t('experience.keyAchievements')}
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievementKeys.map((achievementKey: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-portfolio-text/80">
                          <TrendingUp className="w-4 h-4 text-portfolio-accent-green mt-0.5 flex-shrink-0" />
                          <span>{t(achievementKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills and Technologies */}
                <div className="border-t border-portfolio-divider/20 pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-portfolio-text mb-3">
                        {t('experience.technologiesUsed')}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-portfolio-bg/50 text-portfolio-text/80 rounded-full border border-portfolio-divider/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Skills */}
                    <div>
                      <h5 className="text-sm font-semibold text-portfolio-text mb-3">
                        {t('experience.keySkills')}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.skillKeys.map((skillKey) => (
                          <span
                            key={skillKey}
                            className="px-3 py-1 text-xs bg-portfolio-accent-blue/20 text-portfolio-accent-blue rounded-full font-medium"
                          >
                            {t(skillKey)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* WorkExperience JSON-LD Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(workExperienceSchema)
          }}
        />
      </div>
    </section>
  );
}