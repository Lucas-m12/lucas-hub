'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/contexts/language-context';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, TrendingUp, Filter } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Will Bank Payment System',
    shortDescription: {
      pt: 'Sistema crítico de pagamentos processando 10M+ transações mensais',
      en: 'Critical payment system processing 10M+ monthly transactions'
    },
    description: {
      pt: 'Sistema de pagamentos de alta criticidade desenvolvido para o Will Bank, processando mais de 10 milhões de transações mensais com 99.9% de disponibilidade. Liderei o desenvolvimento de funcionalidades como boletos, débito em conta, recargas de celular e PIX. Implementei otimizações que reduziram a latência de processamento em 40% através do uso estratégico de Redis e arquitetura de microsserviços.\n\nA infraestrutura utiliza Node.js com TypeScript para máxima type safety, PostgreSQL para persistência de dados críticos, e AWS para escalabilidade. O sistema inclui circuit breakers, rate limiting, e monitoramento em tempo real com Datadog. Gerencio mais de 20 serviços em produção usando Terraform para infraestrutura como código.',
      en: 'High-criticality payment system developed for Will Bank, processing over 10 million monthly transactions with 99.9% availability. I led the development of features like bank slips, direct debit, mobile top-ups, and PIX. Implemented optimizations that reduced processing latency by 40% through strategic use of Redis and microservices architecture.\n\nThe infrastructure uses Node.js with TypeScript for maximum type safety, PostgreSQL for critical data persistence, and AWS for scalability. The system includes circuit breakers, rate limiting, and real-time monitoring with Datadog. I manage over 20 production services using Terraform for infrastructure as code.'
    },
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Terraform', 'Docker', 'Microservices'],
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: {
      pt: 'Sistema de pagamentos Will Bank mostrando dashboard de transações, métricas de performance e arquitetura de microsserviços',
      en: 'Will Bank payment system showing transaction dashboard, performance metrics, and microservices architecture'
    },
    liveUrl: undefined, // Private system
    githubUrl: undefined, // Private repository
    featured: true,
    category: 'Fintech',
    status: 'Production',
    duration: '2022 - Present',
    teamSize: '5 developers',
    impact: ['10M+ transactions/month', '40% latency reduction', '99.9% uptime'],
    highlights: {
      pt: ['Redução de 40% na latência', 'Arquitetura de microsserviços', 'Liderança técnica'],
      en: ['40% latency reduction', 'Microservices architecture', 'Technical leadership']
    }
  },
  {
    id: 2,
    title: 'Flutter Mobile Banking App',
    shortDescription: {
      pt: 'App mobile Flutter servindo 50K+ usuários ativos',
      en: 'Flutter mobile app serving 50K+ active users'
    },
    description: {
      pt: 'Aplicativo móvel desenvolvido em Flutter para o Will Bank, oferecendo funcionalidades bancárias completas para mais de 50.000 usuários ativos. O app inclui transferências, pagamentos, extratos, investimentos e chat de suporte. Implementei arquitetura limpa com BLoC pattern para gerenciamento de estado e offline-first approach para garantir funcionamento sem conexão.\n\nIntegração nativa com APIs de pagamento, biometria para autenticação, e push notifications personalizadas. O app possui design system próprio seguindo as diretrizes do Material Design 3 e Human Interface Guidelines. Performance otimizada com lazy loading, cache inteligente e animações fluidas a 60fps.',
      en: 'Mobile application developed in Flutter for Will Bank, offering complete banking features for over 50,000 active users. The app includes transfers, payments, statements, investments, and support chat. I implemented clean architecture with BLoC pattern for state management and offline-first approach to ensure functionality without connection.\n\nNative integration with payment APIs, biometry for authentication, and personalized push notifications. The app has its own design system following Material Design 3 and Human Interface Guidelines. Optimized performance with lazy loading, intelligent cache, and smooth animations at 60fps.'
    },
    technologies: ['Flutter', 'Dart', 'BLoC', 'Firebase', 'REST APIs', 'SQLite', 'Push Notifications'],
    image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: {
      pt: 'App mobile Flutter do Will Bank mostrando interface de transferências, dashboard financeiro e funcionalidades bancárias',
      en: 'Will Bank Flutter mobile app showing transfer interface, financial dashboard, and banking features'
    },
    liveUrl: undefined, // Available on app stores
    githubUrl: undefined, // Private repository
    featured: true,
    category: 'Mobile',
    status: 'Production',
    duration: '2023 - Present',
    teamSize: '3 developers',
    impact: ['50K+ active users', 'Offline-first architecture', '4.8★ app store rating'],
    highlights: {
      pt: ['50K+ usuários ativos', 'Arquitetura offline-first', 'Avaliação 4.8★'],
      en: ['50K+ active users', 'Offline-first architecture', '4.8★ store rating']
    }
  },
  {
    id: 3,
    title: 'Phooto Design Platform',
    shortDescription: {
      pt: 'Plataforma de design gráfico online com editor Canvas',
      en: 'Online graphic design platform with Canvas editor'
    },
    description: {
      pt: 'Plataforma completa de design gráfico online desenvolvida para a Phooto, permitindo criação e personalização de produtos gráficos com editor baseado em Canvas API. Atendeu mais de 10.000 usuários mensais com funcionalidades como templates pré-definidos, upload de imagens, manipulação de texto e exportação em alta qualidade.\n\nImplementei otimizações de performance que resultaram em 60% de melhoria no carregamento da aplicação. O sistema inclui integração com APIs de impressão sob demanda, processamento de pagamentos e sistema de templates dinâmicos. Arquitetura escalável com React para frontend e Node.js para backend.',
      en: 'Complete online graphic design platform developed for Phooto, enabling creation and customization of graphic products with Canvas API-based editor. Served over 10,000 monthly users with features like predefined templates, image upload, text manipulation, and high-quality export.\n\nI implemented performance optimizations that resulted in 60% improvement in application loading. The system includes integration with print-on-demand APIs, payment processing, and dynamic template system. Scalable architecture with React for frontend and Node.js for backend.'
    },
    technologies: ['React', 'Canvas API', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'AWS S3'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: {
      pt: 'Plataforma Phooto mostrando editor gráfico Canvas, templates de design e interface de personalização',
      en: 'Phooto platform showing Canvas graphic editor, design templates, and customization interface'
    },
    liveUrl: undefined, // 'https://phooto.com.br',
    githubUrl: undefined, // Private repository
    featured: true,
    category: 'Full Stack',
    status: 'Completed',
    duration: '2020 - 2022',
    teamSize: '4 developers',
    impact: ['10K+ monthly users', '60% performance improvement', 'Canvas-based editor'],
    highlights: {
      pt: ['10K+ usuários mensais', '60% melhoria de performance', 'Editor Canvas avançado'],
      en: ['10K+ monthly users', '60% performance improvement', 'Advanced Canvas editor']
    }
  },
  {
    id: 4,
    title: 'School Management System',
    shortDescription: {
      pt: 'Sistema de gestão escolar para 50+ instituições',
      en: 'School management system for 50+ institutions'
    },
    description: {
      pt: 'Sistema completo de gestão escolar desenvolvido para Práxis, atendendo mais de 50 instituições de ensino. Incluiu módulos para matrículas, notas, frequência, financeiro, e comunicação entre pais e escola. Desenvolvido com PHP Laravel e React Native para versão mobile.\n\nImplementei otimizações de consultas MySQL que resultaram em 50% de redução no tempo de resposta. O sistema possui dashboard administrativo completo, relatórios personalizáveis, e API REST para integrações. Inclui módulo financeiro com controle de mensalidades e comunicação automatizada.',
      en: 'Complete school management system developed for Práxis, serving over 50 educational institutions. Included modules for enrollment, grades, attendance, financial, and parent-school communication. Built with PHP Laravel and React Native for mobile version.\n\nI implemented MySQL query optimizations that resulted in 50% response time reduction. The system has complete administrative dashboard, customizable reports, and REST API for integrations. Includes financial module with tuition control and automated communication.'
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'React Native', 'REST APIs', 'jQuery'],
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: {
      pt: 'Sistema de gestão escolar Práxis mostrando dashboard administrativo, módulos de notas e comunicação',
      en: 'Práxis school management system showing administrative dashboard, grade modules, and communication'
    },
    liveUrl: undefined,
    githubUrl: undefined,
    featured: false,
    category: 'Full Stack',
    status: 'Completed',
    duration: '2019 - 2020',
    teamSize: '2 developers',
    impact: ['50+ institutions', '50% faster queries', 'Complete ERP system'],
    highlights: {
      pt: ['50+ instituições', 'Consultas 50% mais rápidas', 'ERP completo'],
      en: ['50+ institutions', '50% faster queries', 'Complete ERP system']
    }
  }
];

const categories = ['All', 'Fintech', 'Mobile', 'Full Stack'];
const statusColors: Record<string, string> = {
  'Production': 'bg-green-500/20 text-green-400',
  'Completed': 'bg-blue-500/20 text-blue-400',
  'In Development': 'bg-yellow-500/20 text-yellow-400'
};

// CreativeWork JSON-LD Schema for projects
const generateProjectSchema = (projects: any[], language: string) => {
  return projects.map(project => ({
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.shortDescription[language],
    "author": {
      "@type": "Person",
      "name": "Lucas Marinho"
    },
    "programmingLanguage": project.technologies,
    "dateCreated": project.duration.split(' - ')[0],
    "category": project.category,
    "workExample": project.liveUrl,
    "codeRepository": project.githubUrl
  }));
};

export function ProjectsSection() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  
  // Filter projects based on category and featured status
  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const featuredMatch = !showFeaturedOnly || project.featured;
    return categoryMatch && featuredMatch;
  });
  
  // Generate CreativeWork schema for projects
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": generateProjectSchema(projects, language)
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

        {/* Filters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={itemVariants}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-portfolio-accent-blue focus-visible:ring-offset-2 ${
                  selectedCategory === category
                    ? 'bg-portfolio-accent-blue text-white'
                    : 'bg-portfolio-card text-portfolio-text/80 hover:bg-portfolio-accent-blue/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          <motion.button
            variants={itemVariants}
            onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              showFeaturedOnly
                ? 'bg-portfolio-accent-green text-white'
                : 'bg-portfolio-card text-portfolio-text/80 hover:bg-portfolio-accent-green/20'
            }`}
          >
            <Filter className="w-4 h-4" />
{t('projects.featured')}
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="portfolio-card overflow-hidden group relative"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt[language]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyEyDnyoUcjmupE5oLaaM3iJw=="
                />
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                  {project.status}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-portfolio-bg/90 backdrop-blur-sm rounded-full text-xs font-medium text-portfolio-text">
                  {project.category}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <Button size="sm" className="portfolio-gradient text-white flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
{t('projects.viewLive')}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="border-portfolio-divider text-portfolio-text hover:bg-portfolio-card flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
{t('projects.code')}
                      </a>
                    </Button>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <div className="flex-1 text-center text-sm text-portfolio-text/60">
{t('projects.privateProject')}
                    </div>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-portfolio-text group-hover:text-portfolio-accent-blue transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                {/* Short Description */}
                <p className="text-portfolio-text/80 mb-4 leading-relaxed">
                  {project.shortDescription[language]}
                </p>
                
                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-portfolio-bg/30 rounded-lg">
                  <div className="text-center">
                    <Calendar className="w-4 h-4 mx-auto mb-1 text-portfolio-accent-blue" />
                    <div className="text-xs text-portfolio-text/60">{project.duration}</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-4 h-4 mx-auto mb-1 text-portfolio-accent-green" />
                    <div className="text-xs text-portfolio-text/60">{project.teamSize}</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-4 h-4 mx-auto mb-1 text-portfolio-accent-blue" />
                    <div className="text-xs text-portfolio-text/60">{project.impact[0]}</div>
                  </div>
                </div>
                
                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-portfolio-text mb-2">{t('projects.highlights')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights[language].map((highlight, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-portfolio-accent-blue/20 text-portfolio-accent-blue rounded-md">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-portfolio-bg/50 text-portfolio-text/80 rounded-full border border-portfolio-divider/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 text-xs text-portfolio-accent-blue font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CreativeWork JSON-LD Schema for projects */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(projectsSchema)
          }}
        />
      </div>
    </section>
  );
}