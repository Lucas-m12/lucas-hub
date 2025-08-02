'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = useCallback((key: string): string => {
    const translations = getTranslations(language);
    return translations[key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

function getTranslations(language: Language): Record<string, string> {
  if (language === 'en') {
    return {
      // Navigation
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',
      
      // Hero Section
      'hero.greeting': 'Hello, I\'m',
      'hero.name': 'Lucas Marinho',
      'hero.title': 'Full Stack Developer',
      'hero.subtitle': 'I create modern and innovative digital solutions with focus on exceptional user experiences.',
      'hero.cta': 'View Experience',
      'hero.contact': 'Get in Touch',
      
      // About Section
      'about.title': 'About Me',
      'about.subtitle': 'Passionate developer focused on creating impactful solutions',
      'about.description': 'With over 5 years of comprehensive experience in full-stack web development, I have established myself as a versatile software engineer specializing in creating modern, scalable, and high-performance applications that serve millions of users. My professional journey has taken me through various challenging domains, from financial technology and payment systems to e-commerce platforms and educational management solutions.\n\nCurrently serving as a Software Engineer at Will Bank, I lead the development and maintenance of critical payment infrastructure that processes over 10 million transactions monthly. My expertise spans across the entire technology stack, from designing robust backend architectures using Node.js and TypeScript to crafting intuitive user interfaces with React and Next.js. I have successfully reduced payment processing latency by 40% through strategic Redis implementation and architectural optimizations.\n\nMy technical proficiency extends to cloud infrastructure management, particularly with AWS services, where I leverage Terraform for infrastructure as code, managing over 20 production services. I am equally comfortable with mobile development, having led Flutter app development that serves more than 50,000 active users, ensuring seamless cross-platform experiences.\n\nThroughout my career, I have consistently focused on performance optimization, security best practices, and scalable system design. My approach combines deep technical knowledge with business acumen, always considering the broader impact of technological decisions on user experience and business objectives. I am passionate about mentoring team members, leading technical initiatives, and staying at the forefront of emerging technologies to deliver innovative solutions that make a real difference.',
      'about.skills': 'Main Skills',
      
      // Projects Section
      'projects.title': 'Featured Projects',
      'projects.viewMore': 'View More',
      'projects.liveDemo': 'Live Demo',
      'projects.sourceCode': 'Source Code',
      
      // Experience Section
      'experience.title': 'Professional Experience',
      
      // Contact Section
      'contact.title': 'Let\'s Work Together',
      'contact.subtitle': 'Ready to start your next project?',
      'contact.description': 'I\'m always open to discussing new opportunities and interesting projects. Let\'s create something amazing together!',
      'contact.email': 'Send Email',
      'contact.linkedin': 'LinkedIn',
      'contact.github': 'GitHub',
      
      // Contact New Section
      'contact.newTitle': 'Let\'s Connect',
      'contact.newSubtitle': 'Open to opportunities and professional networking',
      'contact.newDescription': 'As a Senior Software Engineer at Will Bank, I\'m always interested in discussing technology, sharing experiences, and exploring professional growth opportunities. Feel free to reach out!',
      'contact.corporateOpportunities': 'Corporate Opportunities',
      'contact.corporateDesc': 'Companies interested in discussing senior positions, technical leadership, or consulting on critical systems',
      'contact.professionalNetworking': 'Professional Networking',
      'contact.networkingDesc': 'Developers, architects, and technical leaders for experience and knowledge exchange',
      'contact.mentoringTalks': 'Mentoring and Talks',
      'contact.mentoringDesc': 'Invitations for mentoring, technical talks, or participation in fintech and architecture events',
      'contact.technicalCollaborations': 'Technical Collaborations',
      'contact.collaborationsDesc': 'Architecture discussions, code reviews, or collaborations on open source projects',
      'contact.howToReach': 'How to reach me',
      'contact.sendEmail': 'Send Email',
      'contact.responseTime': 'I usually respond within 24 hours',
      'contact.availableNetworking': 'Available for networking',
      'contact.currentStatus': 'Currently working at Will Bank, but always open to conversations about technology, future opportunities, and professional collaborations.',
      
      // About Section
      'about.journeyTitle': 'My Professional Journey',
      'about.currentExperience': 'Current Experience',
      'about.currentExpDesc': 'Currently working as a Software Engineer at Will Bank, I contribute to the development and maintenance of critical payments infrastructure that processes millions of monthly transactions. I work on performance optimizations, implementing caching solutions, and architectural improvements to ensure system stability and efficiency.',
      'about.technicalExpertise': 'Technical Expertise',
      'about.technicalExpDesc': "I have solid experience with cloud infrastructure, primarily on AWS, where I've been using Terraform for secure and scalable resource provisioning and automation. On a day-to-day basis, I enjoy deeply understanding the services I use and structuring the infrastructure with a product vision and long-term maintenance. In mobile, I've worked with Flutter on applications that impact tens of thousands of users, actively participating in both the architecture and the continuous delivery of new features",
      'about.developmentPhilosophy': 'Development Philosophy',
      'about.philosophyDesc': "Throughout my career, I've maintained a constant focus on building high-performance, secure, and scalable systems, without ever losing sight of the business context. My approach is based on the principle that technical decisions only make sense when connected to real impact—whether for the user or the business. I enjoy simplifying the complex, leading technical initiatives that get off the ground, and helping the team grow together by sharing knowledge. I'm always on the lookout for trends (and what's just hype) to deliver modern, efficient solutions that truly solve problems.",
      'about.briefIntro': 'Full-stack development specialist with over 5 years of experience, focused on critical payment systems and scalable applications.',
      'about.transactionsMonth': 'Transactions/month',
      'about.yearsExperience': 'Years experience',
      'about.systemUptime': 'System uptime',
      'about.skillsDescription': 'Technologies and tools I master to create robust and scalable solutions',
      
      // Experience Section
      'experience.subtitle': 'Over 5 years building critical systems and leading development teams',
      'experience.current': 'Current',
      'experience.keyResponsibilities': 'Key Responsibilities',
      'experience.keyAchievements': 'Key Achievements',
      'experience.technologiesUsed': 'Technologies Used:',
      'experience.keySkills': 'Key Skills:',
      
      // Will Bank Experience
      'experience.willbank.title': 'Software Engineer',
      'experience.willbank.employmentType': 'Full-time',
      'experience.willbank.description': 'Development and maintenance of critical payment systems processing millions of monthly transactions. Technical leadership in bank slip, direct debit, mobile top-up, and PIX projects. Implementation of scalable microservices architecture using Node.js, TypeScript, and AWS.',
      'experience.willbank.companyInfo': 'Fintech focused on payment solutions for businesses',
      'experience.willbank.resp1': 'Rust, TypeScript, Node.js, AWS',
      'experience.willbank.resp2': 'Architecture and development of critical microservices',
      'experience.willbank.resp3': 'Performance optimization resulting in latency reduction',
      'experience.willbank.resp4': 'AWS infrastructure implementation with Terraform',
      'experience.willbank.resp5': 'Flutter app development for thousands of users',
      'experience.willbank.resp6': 'DevOps practices and CI/CD implementation',
      'experience.willbank.resp7': 'Monitoring and observability with Datadog',
      'experience.willbank.achievement1': 'Millions of monthly processed transactions',
      'experience.willbank.achievement2': 'Payment latency reduction',
      'experience.willbank.achievement3': 'System availability',
      'experience.willbank.achievement4': 'Microservices in production',
      'experience.willbank.achievement5': 'Mobile app active users',
      'experience.willbank.achievement6': 'Zero critical incidents',
      'experience.willbank.skill1': 'Software Architecture',
      'experience.willbank.skill2': 'DevOps',
      'experience.willbank.skill3': 'Critical Systems',
      'experience.willbank.skill4': 'Mobile',
      
      // Phooto Experience
      'experience.phooto.title': 'Mid-level Frontend Developer',
      'experience.phooto.employmentType': 'Full-time',
      'experience.phooto.description': 'Development of e-commerce platform and online graphic design with focus on performance and user experience. Creation of graphic editor using Canvas API serving thousands of monthly users.',
      'experience.phooto.companyInfo': 'Graphic design and custom printing platform',
      'experience.phooto.resp1': 'Interface development using React and TypeScript',
      'experience.phooto.resp2': 'Advanced graphic editor creation with Canvas API',
      'experience.phooto.resp3': 'Web application performance optimization',
      'experience.phooto.resp4': 'Integration with payment and printing APIs',
      'experience.phooto.resp5': 'Component architecture implementation',
      'experience.phooto.resp6': 'Junior developer mentoring',
      'experience.phooto.achievement1': 'Application performance improvement',
      'experience.phooto.achievement2': 'Monthly platform users',
      'experience.phooto.achievement3': 'Fully functional Canvas editor',
      'experience.phooto.achievement4': 'Multiple payment APIs integration',
      'experience.phooto.achievement5': 'Dynamic template system',
      'experience.phooto.achievement6': 'Scalable architecture',
      'experience.phooto.skill1': 'Advanced Frontend',
      'experience.phooto.skill2': 'Canvas API with Konva.js',
      'experience.phooto.skill3': 'Performance',
      'experience.phooto.skill4': 'UX/UI',
      
      // Praxis Experience
      'experience.praxis.title': 'Junior Web Developer',
      'experience.praxis.employmentType': 'Full-time',
      'experience.praxis.description': 'Development of complete school management system serving educational institutions. Creation of modules for enrollment, grades, attendance, and parent-school communication.',
      'experience.praxis.companyInfo': 'Management system for educational institutions',
      'experience.praxis.resp1': 'Full-stack development with PHP Laravel',
      'experience.praxis.resp2': 'React Native mobile app creation',
      'experience.praxis.resp3': 'MySQL query optimization',
      'experience.praxis.resp4': 'Customizable reports development',
      'experience.praxis.resp5': 'Financial module implementation',
      'experience.praxis.resp6': 'Technical support and user training',
      'experience.praxis.achievement1': 'Educational institutions served',
      'experience.praxis.achievement2': 'Response time reduction',
      'experience.praxis.achievement3': 'Complete ERP system',
      'experience.praxis.achievement4': 'Mobile app for parent-school communication',
      'experience.praxis.achievement5': 'Integrated management modules',
      'experience.praxis.achievement6': 'Complete administrative interface',
      'experience.praxis.skill1': 'Full Stack with PHP',
      'experience.praxis.skill2': 'Mobile with React Native',
      'experience.praxis.skill3': 'Database with MySQL',
      'experience.praxis.skill4': 'ERP',
      
      // FAQ Section
      'faq.title': 'Frequently Asked Questions',
      'faq.subtitle': 'Answers to common questions about my experience and services',
      
      // FAQ Questions and Answers
      'faq.q1.question': 'What technologies do you specialize in?',
      'faq.q1.answer': 'I specialize in full-stack development with React, Node.js, TypeScript, AWS, PostgreSQL, Flutter, Redis, and Terraform. I have specific experience in critical payment systems, microservices architectures, and cloud infrastructure. I also work with technologies like Next.js, Express.js, MongoDB, Python, and FastAPI for specific projects.',
      'faq.q2.question': 'What is your experience with payment systems?',
      'faq.q2.answer': 'I have over 3 years of experience at Will Bank developing critical payment systems that process millions of monthly transactions. I work with bank slips, direct debit, mobile top-ups, PIX, and digital wallets. I implemented optimizations that reduced processing latency by 40% and maintain systems with 99.9% availability.',
      'faq.q3.question': 'Do you work remotely with international teams?',
      'faq.q3.answer': 'Yes, I have experience working remotely since 2020. I lead teams of 5 developers at Will Bank and have collaborated with distributed teams on previous projects. I have experience with agile methodologies, asynchronous communication, and collaboration tools like Slack, Zoom, Jira, and GitHub. I am fluent in Portuguese and English.',
      'faq.q4.question': 'What\'s your approach to full-stack development?',
      'faq.q4.answer': 'My approach combines deep technical knowledge with business acumen. I focus on scalable architectures, optimized performance, and exceptional user experience. I use DevOps practices with CI/CD, automated testing, monitoring, and infrastructure as code. I always consider security, accessibility, and SEO from the beginning of development.',
      'faq.q5.question': 'How do you ensure project quality and performance?',
      'faq.q5.answer': 'I implement comprehensive quality strategies including unit, integration, and e2e testing, systematic code reviews, performance analysis with Core Web Vitals, real-time monitoring with tools like Datadog, and database optimizations. I use specific metrics like response time < 200ms, availability > 99.9%, and Lighthouse scores > 95.',
      'faq.q6.question': 'Do you have experience with microservices architecture?',
      'faq.q6.answer': 'Yes, I implemented microservices architectures at Will Bank using Node.js, Docker, AWS ECS/EKS, and Terraform. I manage inter-service communication via REST APIs and messaging, implement circuit breakers, load balancing, and service discovery. I maintain over 20 production services with distributed monitoring and centralized logging.',
      
      // Hero Section New
      'hero.scrollToExplore': 'Scroll to explore',
      'hero.stat1.label': 'Years experience',
      'hero.stat2.label': 'Projects delivered',
      'hero.stat3.label': 'Companies impacted',
      'hero.highlight1': '🏦 Fintech specialist',
      'hero.highlight2': '⚡ Performance optimized',
      'hero.highlight3': '🚀 Technical leadership',
      
      // Projects Section
      'projects.subtitle': 'Projects that demonstrate my experience in critical systems and scalable applications',
      'projects.featured': 'Featured',
      'projects.highlights': 'Highlights:',
      'projects.privateProject': 'Private Project',
      'projects.viewLive': 'View Live',
      'projects.code': 'Code',
      
      // Footer
      'footer.rights': 'All rights reserved.',
      'footer.made': 'Made with',
      'footer.in': 'in Brazil',
    };
  }
  
  // Portuguese translations (default)
  return {
    // Navigation
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'Lucas Marinho',
    'hero.title': 'Desenvolvedor Full Stack',
    'hero.subtitle': 'Crio soluções digitais modernas e inovadoras com foco em experiências excepcionais.',
    'hero.cta': 'Ver Experiência',
    'hero.contact': 'Entre em Contato',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Desenvolvedor apaixonado por criar soluções impactantes',
    'about.description': 'Com mais de 5 anos de experiência abrangente em desenvolvimento web full-stack, consolidei-me como um engenheiro de software versátil especializado na criação de aplicações modernas, escaláveis e de alta performance que atendem milhões de usuários. Minha jornada profissional me levou através de diversos domínios desafiadores, desde tecnologia financeira e sistemas de pagamento até plataformas de e-commerce e soluções de gestão educacional.\n\nAtualmente atuando como Engenheiro de Software no Will Bank, lidero o desenvolvimento e manutenção de infraestrutura crítica de pagamentos que processa milhões de transações mensais. Minha expertise abrange toda a stack tecnológica, desde o design de arquiteturas backend robustas usando Node.js e TypeScript até a criação de interfaces de usuário intuitivas com React e Next.js. Consegui reduzir a latência de processamento de pagamentos em 40% através da implementação estratégica do Redis e otimizações arquiteturais.\n\nMinha proficiência técnica se estende ao gerenciamento de infraestrutura em nuvem, particularmente com serviços AWS, onde utilizo Terraform para infraestrutura como código, gerenciando mais de 20 serviços em produção. Tenho igual conforto com desenvolvimento mobile, tendo liderado o desenvolvimento de aplicativos Flutter que atendem mais de 50.000 usuários ativos, garantindo experiências multiplataforma seamless.\n\nAo longo da minha carreira, tenho consistentemente focado em otimização de performance, práticas de segurança e design de sistemas escaláveis. Minha abordagem combina conhecimento técnico profundo com perspicácia de negócios, sempre considerando o impacto mais amplo das decisões tecnológicas na experiência do usuário e objetivos empresariais. Sou apaixonado por mentorar membros da equipe, liderar iniciativas técnicas e permanecer na vanguarda das tecnologias emergentes para entregar soluções inovadoras que fazem uma diferença real.',
    'about.skills': 'Principais Habilidades',
    
    // Projects Section
    'projects.title': 'Projetos em Destaque',
    'projects.viewMore': 'Ver Mais',
    'projects.liveDemo': 'Demo ao Vivo',
    'projects.sourceCode': 'Código Fonte',
    
    // Experience Section
    'experience.title': 'Experiência Profissional',
    
    // Contact Section
    'contact.title': 'Vamos Trabalhar Juntos',
    'contact.subtitle': 'Pronto para começar seu próximo projeto?',
    'contact.description': 'Estou sempre aberto para discutir novas oportunidades e projetos interessantes. Vamos criar algo incrível juntos!',
    'contact.email': 'Enviar Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    
    // Contact New Section
    'contact.newTitle': 'Vamos Conectar',
    'contact.newSubtitle': 'Aberto para oportunidades e networking profissional',
    'contact.newDescription': 'Como Engenheiro de Software sênior no Will Bank, estou sempre interessado em discutir tecnologia, compartilhar experiências e explorar oportunidades de crescimento profissional. Sinta-se à vontade para entrar em contato!',
    'contact.corporateOpportunities': 'Oportunidades Corporativas',
    'contact.corporateDesc': 'Empresas interessadas em discutir posições sênior, liderança técnica ou consultoria em sistemas críticos',
    'contact.professionalNetworking': 'Networking Profissional',
    'contact.networkingDesc': 'Desenvolvedores, arquitetos e líderes técnicos para troca de experiências e conhecimento',
    'contact.mentoringTalks': 'Mentorias e Palestras',
    'contact.mentoringDesc': 'Convites para mentorias, palestras técnicas ou participação em eventos sobre fintech e arquitetura',
    'contact.technicalCollaborations': 'Colaborações Técnicas',
    'contact.collaborationsDesc': 'Discussões sobre arquitetura, revisão de código, ou colaborações em projetos open source',
    'contact.howToReach': 'Como me encontrar',
    'contact.sendEmail': 'Enviar Email',
    'contact.responseTime': 'Respondo normalmente em até 24 horas',
    'contact.availableNetworking': 'Disponível para networking',
    'contact.currentStatus': 'Atualmente trabalhando no Will Bank, mas sempre aberto para conversas sobre tecnologia, oportunidades futuras e colaborações profissionais.',
    
    // About Section
    'about.journeyTitle': 'Minha Jornada Profissional',
    'about.currentExperience': 'Experiência Atual',
    'about.currentExpDesc': 'Atualmente atuando como Engenheiro de Software no Will Bank, contribuo para o desenvolvimento e manutenção de infraestrutura crítica de pagamentos que processa milhões de transações mensais. Trabalho com otimizações de performance, implementação de soluções de cache e melhorias arquiteturais para garantir a estabilidade e eficiência do sistema.',
    'about.technicalExpertise': 'Expertise Técnica',
    'about.technicalExpDesc': 'Tenho sólida experiência com infraestrutura em nuvem, principalmente na AWS, onde venho utilizando Terraform para provisionamento e automação de recursos de forma segura e escalável. No dia a dia, gosto de entender a fundo os serviços que uso e estruturar a infraestrutura com visão de produto e manutenção a longo prazo. No mobile, atuei com Flutter em aplicações que impactam dezenas de milhares de usuários, participando ativamente tanto da arquitetura quanto da entrega contínua de novas funcionalidades.',
    'about.developmentPhilosophy': 'Filosofia de Desenvolvimento',
    'about.philosophyDesc': 'Ao longo da minha trajetória, tenho mantido um foco constante em construir sistemas performáticos, seguros e escaláveis, sem nunca perder de vista o contexto de negócio. Minha forma de trabalhar parte do princípio de que decisões técnicas só fazem sentido quando conectadas a impacto real — seja para o usuário, seja para a empresa. Gosto de simplificar o complexo, liderar iniciativas técnicas que saiam do papel e ajudar o time a crescer junto, compartilhando conhecimento. Estou sempre de olho no que é tendência (e no que é só hype) para entregar soluções modernas, eficientes e que realmente resolvem problemas.',
    'about.briefIntro': 'Especialista em desenvolvimento full-stack com mais de 5 anos de experiência, focado em sistemas de pagamento críticos e aplicações escaláveis.',
    'about.transactionsMonth': 'Transações/mês',
    'about.yearsExperience': 'Anos de experiência',
    'about.systemUptime': 'Disponibilidade',
    'about.skillsDescription': 'Tecnologias e ferramentas que domino para criar soluções robustas e escaláveis',
    
    // Experience Section
    'experience.subtitle': 'Mais de 5 anos construindo sistemas críticos e liderando equipes de desenvolvimento',
    'experience.current': 'Atual',
    'experience.keyResponsibilities': 'Principais Responsabilidades',
    'experience.keyAchievements': 'Principais Conquistas',
    'experience.technologiesUsed': 'Tecnologias Utilizadas:',
    'experience.keySkills': 'Competências Principais:',
    
    // Will Bank Experience
    'experience.willbank.title': 'Engenheiro de Software',
    'experience.willbank.employmentType': 'Tempo Integral',
    'experience.willbank.description': 'Desenvolvimento e manutenção de sistemas de pagamento críticos processando milhões de transações mensais. Atuação focada em projetos de boletos, débito em conta e recargas de celular. Implementação de arquitetura escalável usando Node.js, TypeScript, Rust e AWS.',
    'experience.willbank.companyInfo': 'Fintech focada em soluções de pagamento para empresas',
    'experience.willbank.resp1': 'Rust, TypeScript, Node.js, AWS',
    'experience.willbank.resp2': 'Arquitetura e desenvolvimento de microsserviços',
    'experience.willbank.resp3': 'Otimização de performance resultando em latência reduzida',
    'experience.willbank.resp4': 'Implementação de infraestrutura AWS com Terraform',
    'experience.willbank.resp5': 'Desenvolvimento de aplicativo Flutter para milhares de usuários',
    'experience.willbank.resp6': 'Implementação de práticas DevOps e CI/CD',
    'experience.willbank.resp7': 'Monitoramento e observabilidade com Datadog',
    'experience.willbank.achievement1': 'Milhões de transações processadas mensalmente',
    'experience.willbank.achievement2': 'Latência de pagamentos reduzida',
    'experience.willbank.achievement3': 'Disponibilidade dos sistemas garantida',
    'experience.willbank.achievement4': 'Microsserviços em produção',
    'experience.willbank.achievement5': 'Usuários ativos no app mobile',
    'experience.willbank.skill1': 'Arquitetura de Software',
    'experience.willbank.skill2': 'DevOps',
    'experience.willbank.skill3': 'Sistemas Críticos',
    'experience.willbank.skill4': 'Mobile',
    
    // Phooto Experience
    'experience.phooto.title': 'Desenvolvedor Frontend Pleno',
    'experience.phooto.employmentType': 'Tempo Integral',
    'experience.phooto.description': 'Desenvolvimento de plataforma de e-commerce e design gráfico online com foco em performance e experiência do usuário. Criação de editor gráfico usando Canvas API servindo milhares de usuários mensais.',
    'experience.phooto.companyInfo': 'Plataforma de design gráfico e impressão personalizada',
    'experience.phooto.resp1': 'Desenvolvimento de interface usando React e TypeScript',
    'experience.phooto.resp2': 'Criação de editor gráfico avançado com Canvas API',
    'experience.phooto.resp3': 'Otimização de performance da aplicação web',
    'experience.phooto.resp4': 'Integração com APIs de pagamento e impressão',
    'experience.phooto.resp5': 'Implementação de arquitetura componentizada',
    'experience.phooto.resp6': 'Mentoria de desenvolvedores juniores',
    'experience.phooto.achievement1': 'Performance da aplicação melhorada',
    'experience.phooto.achievement2': 'Usuários mensais na plataforma',
    'experience.phooto.achievement3': 'Editor Canvas totalmente funcional',
    'experience.phooto.achievement4': 'Integração com múltiplas APIs de pagamento',
    'experience.phooto.achievement5': 'Sistema de templates dinâmicos',
    'experience.phooto.achievement6': 'Arquitetura escalável',
    'experience.phooto.skill1': 'Frontend',
    'experience.phooto.skill2': 'Canvas API usando Konva.js',
    'experience.phooto.skill3': 'Performance',
    'experience.phooto.skill4': 'UX/UI',
    
    // Praxis Experience
    'experience.praxis.title': 'Desenvolvedor Web Júnior',
    'experience.praxis.employmentType': 'Tempo Integral',
    'experience.praxis.description': 'Desenvolvimento de sistema de gestão escolar completo atendendo instituições de ensino. Criação de módulos para matrículas, notas, frequência e comunicação entre pais e escola.',
    'experience.praxis.companyInfo': 'Sistema de gestão para instituições de ensino',
    'experience.praxis.resp1': 'Desenvolvimento full-stack com PHP Laravel',
    'experience.praxis.resp2': 'Criação de aplicativo mobile React Native',
    'experience.praxis.resp3': 'Otimização de consultas MySQL',
    'experience.praxis.resp4': 'Desenvolvimento de relatórios personalizáveis',
    'experience.praxis.resp5': 'Implementação de módulo financeiro',
    'experience.praxis.resp6': 'Suporte técnico e treinamento de usuários',
    'experience.praxis.achievement1': 'Instituições de ensino atendidas',
    'experience.praxis.achievement2': 'Redução no tempo de resposta',
    'experience.praxis.achievement3': 'Sistema ERP completo desenvolvido',
    'experience.praxis.achievement4': 'App mobile para comunicação pais-escola',
    'experience.praxis.achievement5': 'Módulos integrados de gestão',
    'experience.praxis.achievement6': 'Interface administrativa completa',
    'experience.praxis.skill1': 'Full Stack com PHP',
    'experience.praxis.skill2': 'Mobile com React Native',
    'experience.praxis.skill3': 'Otimização de banco de dados com MySQL',
    'experience.praxis.skill4': 'ERP Systems',
    
    // FAQ Section
    'faq.title': 'Perguntas Frequentes',
    'faq.subtitle': 'Respostas para as perguntas mais comuns sobre minha experiência e serviços',
    
    // FAQ Questions and Answers
    'faq.q1.question': 'Quais tecnologias você especializa?',
    'faq.q1.answer': 'Especializo-me em desenvolvimento full-stack com React, Node.js, TypeScript, AWS, PostgreSQL, Flutter, Redis e Terraform. Tenho experiência específica em sistemas de pagamento críticos, arquiteturas de microsserviços e infraestrutura em nuvem. Também trabalho com tecnologias como Next.js, Express.js, MongoDB, Python e FastAPI para projetos específicos.',
    'faq.q2.question': 'Qual é sua experiência com sistemas de pagamento?',
    'faq.q2.answer': 'Tenho mais de 3 anos de experiência no Will Bank desenvolvendo sistemas de pagamento críticos que processa milhões de transações mensais. Trabalho com boletos, débito em conta, recargas de celular, PIX e carteiras digitais. Implementei otimizações que reduziram a latência de processamento em 40% e mantenho sistemas com 99.9% de disponibilidade.',
    'faq.q3.question': 'Você trabalha remotamente com equipes internacionais?',
    'faq.q3.answer': 'Sim, tenho experiência trabalhando remotamente desde 2020. Lidero equipes de 5 desenvolvedores no Will Bank e já colaborei com times distribuídos em projetos anteriores. Tenho experiência com metodologias ágeis, comunicação assíncrona, e ferramentas de colaboração como Slack, Zoom, Jira e GitHub. Sou fluente em português e inglês.',
    'faq.q4.question': 'Qual é sua abordagem para desenvolvimento full-stack?',
    'faq.q4.answer': 'Minha abordagem combina conhecimento técnico profundo com perspicácia de negócios. Foco em arquiteturas escaláveis, performance otimizada e experiência do usuário excepcional. Utilizo práticas de DevOps com CI/CD, testes automatizados, monitoramento e infraestrutura como código. Sempre considero segurança, acessibilidade e SEO desde o início do desenvolvimento.',
    'faq.q5.question': 'Como você garante a qualidade e performance dos projetos?',
    'faq.q5.answer': 'Implemento estratégias abrangentes de qualidade incluindo testes unitários, integração e e2e, code reviews sistemáticos, análise de performance com Core Web Vitals, monitoramento em tempo real com ferramentas como Datadog, e otimizações de banco de dados. Uso métricas específicas como tempo de resposta < 200ms, disponibilidade > 99.9%, e scores Lighthouse > 95.',
    'faq.q6.question': 'Você tem experiência com arquitetura de microsserviços?',
    'faq.q6.answer': 'Sim, implementei arquiteturas de microsserviços no Will Bank usando Node.js, Docker, AWS ECS/EKS, e Terraform. Gerencio comunicação entre serviços via APIs REST e mensageria, implemento circuit breakers, load balancing, e service discovery. Mantenho mais de 20 serviços em produção com monitoramento distribuído e logging centralizado.',
    
    // Hero Section New
    'hero.scrollToExplore': 'Role para explorar',
    'hero.stat1.label': 'Anos experiência',
    'hero.stat2.label': 'Projetos entregues',
    'hero.stat3.label': 'Empresas impactadas',
    'hero.highlight1': '🏦 Fintech especialista',
    'hero.highlight2': '⚡ Performance otimizada',
    'hero.highlight3': '🚀 Liderança técnica',
    
    // Projects Section
    'projects.subtitle': 'Projetos que demonstram minha experiência em sistemas críticos e aplicações escaláveis',
    'projects.featured': 'Destaques',
    'projects.highlights': 'Destaques:',
    'projects.privateProject': 'Projeto Privado',
    'projects.viewLive': 'Ver Live',
    'projects.code': 'Código',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.made': 'Feito com',
    'footer.in': 'no Brasil',
  };
}