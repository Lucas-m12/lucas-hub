'use client';

import { useLanguage } from '@/lib/contexts/language-context';
import { motion } from 'framer-motion';
import { Cloud, Code, Database, Globe, Server, Smartphone, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    color: 'text-portfolio-accent-blue',
    level: 'Expert'
  },
  {
    icon: Server,
    title: 'Backend',
    technologies: ['Node.js', 'TypeScript', 'Go Lang', 'NestJS', 'Rest APIs', 'GraphQL'],
    color: 'text-portfolio-accent-green',
    level: 'Expert'
  },
  {
    icon: Database,
    title: 'Database',
    technologies: ['PostgreSQL', 'Redis', 'MongoDB', 'MySQL', 'DynamoDB'],
    color: 'text-portfolio-accent-blue',
    level: 'Advanced'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    technologies: ['AWS', 'Terraform', 'Docker', 'CI/CD', 'Kubernetes', 'Monitoring', 'Serverless'],
    color: 'text-portfolio-accent-green',
    level: 'Advanced'
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    technologies: ['Flutter', 'React Native', 'Expo', 'PWA', 'Mobile UI/UX'],
    color: 'text-portfolio-accent-blue',
    level: 'Advanced'
  },
  {
    icon: Zap,
    title: 'Payment Systems',
    technologies: ['Boleto', 'Débito em conta', 'Mobile recharge', 'Carteiras digitais', 'Banking APIs', 'Security',],
    color: 'text-portfolio-accent-green',
    level: 'Expert'
  },
  {
    icon: Globe,
    title: 'Architecture',
    technologies: ['Microservices', 'System Design', 'Scalability', 'Performance', 'Security', 'Monitoring'],
    color: 'text-portfolio-accent-blue',
    level: 'Advanced'
  },
  {
    icon: Code,
    title: 'Tools & Others',
    technologies: ['Claude Code', 'Cursor', 'Git', 'GitHub Actions', 'Datadog', 'Sentry', 'REST APIs', 'Testing'],
    color: 'text-portfolio-accent-green',
    level: 'Advanced'
  },
];

export function AboutSection() {
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
    <section id="about" className="portfolio-section" itemScope itemType="https://schema.org/Person">
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
            itemProp="name"
          >
            {t('about.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-portfolio-text/80 max-w-2xl mx-auto"
            itemProp="jobTitle"
          >
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        {/* Hero Photo and Intro */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-12 mb-16"
        >
          {/* Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-accent-blue/20 shadow-2xl">
                {/* Placeholder for profile photo - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-portfolio-accent-blue to-portfolio-accent-green flex items-center justify-center">
                  <div className="text-6xl md:text-8xl font-bold text-white opacity-50">
                    LM
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-portfolio-accent-blue rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-portfolio-accent-green/30 rounded-full" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-portfolio-accent-blue/40 rounded-full" />
            </div>
          </motion.div>

          {/* Brief Intro */}
          <motion.div
            variants={itemVariants}
            className="flex-1 text-center lg:text-left"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-portfolio-text mb-4">
              Lucas Marinho
            </h3>
            <p className="text-xl text-portfolio-accent-blue font-semibold mb-4">
              Software Engineer @ Will Bank
            </p>
            <p className="text-lg text-portfolio-text/80 leading-relaxed mb-6">
              {t('about.briefIntro')}
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="portfolio-card p-4">
                <div className="text-2xl font-bold text-portfolio-accent-blue">10M+</div>
                <div className="text-sm text-portfolio-text/60">
                  {t('about.transactionsMonth')}
                </div>
              </div>
              <div className="portfolio-card p-4">
                <div className="text-2xl font-bold text-portfolio-accent-green">5+</div>
                <div className="text-sm text-portfolio-text/60">
                  {t('about.yearsExperience')}
                </div>
              </div>
              <div className="portfolio-card p-4 md:col-span-1 col-span-2">
                <div className="text-2xl font-bold text-portfolio-accent-blue">99.9%</div>
                <div className="text-sm text-portfolio-text/60">
                  {t('about.systemUptime')}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Detailed Description */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-portfolio-text mb-6 text-center">
              {t('about.journeyTitle')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="portfolio-card p-6">
                <h4 className="text-lg font-semibold text-portfolio-accent-blue mb-3">
                  {t('about.currentExperience')}
                </h4>
                <p className="text-portfolio-text/80 leading-relaxed">
                  {t('about.currentExpDesc')}
                </p>
              </div>
              
              <div className="portfolio-card p-6">
                <h4 className="text-lg font-semibold text-portfolio-accent-green mb-3">
                  {t('about.technicalExpertise')}
                </h4>
                <p className="text-portfolio-text/80 leading-relaxed">
                  {t('about.technicalExpDesc')}
                </p>
              </div>
            </div>
            
            <div className="portfolio-card p-6 mt-6">
              <h4 className="text-lg font-semibold text-portfolio-accent-blue mb-3">
                {t('about.developmentPhilosophy')}
              </h4>
              <p className="text-portfolio-text/80 leading-relaxed" itemProp="description">
                {t('about.philosophyDesc')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-portfolio-text mb-4" itemProp="knowsAbout">
              {t('about.skills')}
            </h3>
            <p className="text-portfolio-text/60 max-w-2xl mx-auto">
              {t('about.skillsDescription')}
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                className="portfolio-card p-6 group cursor-pointer text-center relative overflow-hidden"
              >
                {/* Expertise Level Badge */}
                <div className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full ${
                  skill.level === 'Expert' 
                    ? 'bg-portfolio-accent-green/20 text-portfolio-accent-green' 
                    : 'bg-portfolio-accent-blue/20 text-portfolio-accent-blue'
                }`}>
                  {skill.level}
                </div>
                
                <div className={`inline-flex p-4 rounded-xl bg-portfolio-bg/50 ${skill.color} group-hover:scale-110 transition-transform duration-300 mb-4`}>
                  <skill.icon className="w-8 h-8" />
                </div>
                
                <h4 className="text-lg font-semibold text-portfolio-text mb-3">
                  {skill.title}
                </h4>
                
                <div className="flex flex-wrap gap-2 justify-center mb-3">
                  {skill.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-portfolio-bg/50 text-portfolio-text/80 rounded-full border border-portfolio-divider/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {skill.technologies.length > 3 && (
                  <div className="text-center">
                    <span className={`text-xs font-medium ${skill.color} opacity-70`}>
                      +{skill.technologies.length - 3} more technologies
                    </span>
                  </div>
                )}
                
                {/* Hover effect - show all technologies */}
                <div className="absolute inset-0 bg-portfolio-card/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
                  <h4 className="text-lg font-semibold text-portfolio-text mb-3">
                    {skill.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-portfolio-bg/70 text-portfolio-text/90 rounded-md border border-portfolio-divider/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}