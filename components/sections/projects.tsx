'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/contexts/language-context';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: {
      pt: 'Plataforma completa de e-commerce com dashboard administrativo, processamento de pagamentos e gestão de inventário.',
      en: 'Complete e-commerce platform with admin dashboard, payment processing, and inventory management.',
    },
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: {
      pt: 'Aplicativo de gestão de tarefas em tempo real com colaboração em equipe e sincronização multiplataforma.',
      en: 'Real-time task management application with team collaboration and cross-platform synchronization.',
    },
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: 'https://images.pexels.com/photos/7689730/pexels-photo-7689730.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: {
      pt: 'Dashboard analítico com visualização de dados interativa e relatórios personalizáveis em tempo real.',
      en: 'Analytics dashboard with interactive data visualization and customizable real-time reports.',
    },
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export function ProjectsSection() {
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
    <section id="projects" className="portfolio-section bg-portfolio-card/20">
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
            {t('projects.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-portfolio-text/80 max-w-2xl mx-auto"
          >
            {t('projects.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          {projects
            .filter(project => project.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="portfolio-card overflow-hidden group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="portfolio-gradient text-white"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('projects.liveDemo')}
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-portfolio-divider text-portfolio-text hover:bg-portfolio-card"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t('projects.sourceCode')}
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-portfolio-text mb-3 group-hover:text-portfolio-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-portfolio-text/80 mb-4 leading-relaxed">
                    {project.description[language]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-portfolio-bg/50 text-portfolio-text/80 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-portfolio-accent-blue hover:text-portfolio-accent-blue hover:bg-portfolio-bg/50 p-0 h-auto group/button"
                  >
                    {t('projects.viewMore')}
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects
            .filter(project => !project.featured)
            .map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="portfolio-card p-6 group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-portfolio-text group-hover:text-portfolio-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-text/60 hover:text-portfolio-accent-blue transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-text/60 hover:text-portfolio-accent-blue transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-portfolio-text/80 mb-4 text-sm leading-relaxed">
                  {project.description[language]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-portfolio-bg/50 text-portfolio-text/80 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}