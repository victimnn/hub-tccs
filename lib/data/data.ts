import { TCCProject, TeamMember } from '../types'
import { advisors } from './advisors'

export const tccProjects: TCCProject[] = [
  {
    id: 1,
    title: "BusHere!",
    description: "Plataforma de gestão integrada de logística sobre rotas, pontos, passageiros e veículos.",
    fullDescription: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
    ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in 
    ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`,
    image: "/bushere.png",
    gallery: [
      "/school-management-dashboard.png",
      "/student-dashboard-interface.png",
      "/teacher-grade-management.jpg",
      "/parent-communication-portal.jpg",
    ],
    technologies: ["React", "Node.js", "MySQL", "Express"],
    members: [
      {
        name: "Victor Ramos",
        role: "Full Stack Developer & Designer & Banco de Dados",
        photo: "/professional-woman-developer.png",
        linkedin: "https://linkedin.com/in/victor-ramos",
        email: "victor.ramosp19@gmail.com",
        location: "Jaguariúna, SP",
        about: "-",
        career: "-",
        expertise: "Frontend Development, UI/UX Design, React, Node.js, MySQL",
        skills: ["React", "TypeScript", "Node.js", "MySQL", "Figma", "Git"],
        achievements: [
          "Lider do projeto BusHere!",
          "-",
          "-",
        ],
      },
      {
        name: "Renan Andrade",
        role: "Backend Developer",
        photo: "/professional-man-developer.png",
        linkedin: "https://linkedin.com/in/renan-andrade",
        email: "renan.andrade@email.com",
        location: "Jaguariúna, SP",
        about: "-",
        career: "-",
        expertise: "Backend Development, API Development, Node.js, Express",
        skills: ["Node.js", "Express", "MySQL", "MongoDB", "Docker", "AWS"],
        achievements: [
          "Arquiteto do projeto BusHere!",
          "-",
          "-",
        ],
      },
      {
        name: "Luiz Souza",
        role: "Frontend Developer & UI/UX Designer",
        photo: "/professional-man-frontend-developer.png",
        linkedin: "https://linkedin.com/in/luiz-souza",
        email: "luiz.souza@email.com",
        location: "Pedreira, SP",
        about: "-",
        career: "-",
        expertise: "UI/UX Design, Frontend Development",
        skills: ["React", "CSS", "Figma", "Adobe XD", "JavaScript"],
        achievements: [
          "-",
          "-",
          "-",
        ],
      },
      {
        name: "Sarah Porsch",
        role: "Documentação",
        photo: "/professional-man-developer.png",
        linkedin: "https://linkedin.com/in/sarah-porsch",
        email: "sarah.porsch@email.com",
        location: "Jaguariúna, SP",
        about: "-",
        career: "-",
        expertise: "Documentação",
        skills: ["Documentação"],
        achievements: [
          "Documentadora do projeto BusHere!",
          "-",
          "-",
        ],
      },
      {
        name: "Marcelo Camillo",
        role: "Documentação",
        photo: "/professional-man-developer.png",
        linkedin: "https://linkedin.com/in/marcelo-camillo",
        email: "marcelo.camillo@email.com",
        location: "Amparo, SP",
        about: "-",
        career: "-",
        expertise: "Documentação",
        skills: ["Documentação"],
        achievements: [
          "-",
          "-",
          "-",
        ],
      },
      
    ],
    advisor: advisors[0],
    year: "2025",
    category: "Web",
    features: [
      "Gestão de Veículos, Passageiros, Rotas e Pontos",
      "Portal do passageiro e responsável",
      "Comunicação integrada",
      "Relatórios automáticos",
      "Sistema de notificações",
      "Dashboard administrativo",
    ],
    links: {
      demo: "https://demo-escola.vercel.app",
      github: "https://github.com/etec-tcc/sistema-escolar",
      documentation: "/docs/sistema-escolar.pdf",
    },
  },
  {
    id: 2,
    title: "E-commerce Sustentável",
    description: "Marketplace focado em produtos ecológicos com sistema de pontuação verde e rastreamento de impacto ambiental.",
    image: "/sustainable-ecommerce.png",
    technologies: ["Next.js", "Python", "PostgreSQL", "Stripe", "Docker"],
    members: [
      {
        name: "João Pedro",
        role: "Full Stack Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/joao-pedro",
        email: "joao.pedro@email.com",
        location: "São Paulo, SP",
        about: "Desenvolvedor especializado em e-commerce e sustentabilidade com foco em soluções inovadoras para o mercado verde.",
        career: "Atua como Full Stack Developer em startups de impacto ambiental, desenvolvendo plataformas sustentáveis.",
        expertise: "E-commerce, Python, PostgreSQL, Sustainability Tech",
        skills: ["Next.js", "Python", "PostgreSQL", "Stripe", "Docker"],
        achievements: [
          "Desenvolveu 3 marketplaces sustentáveis",
          "Especialização em Green Tech",
          "Palestrante em eventos de sustentabilidade",
        ],
      },
      {
        name: "Fernanda Costa",
        role: "Backend Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/fernanda-costa",
        email: "fernanda.costa@email.com",
        location: "São Paulo, SP",
        about: "Especialista em sistemas de pagamento e APIs com experiência em fintechs e soluções financeiras sustentáveis.",
        career: "Desenvolve soluções financeiras para empresas de impacto social e ambiental.",
        expertise: "Payment Systems, APIs, PostgreSQL, Financial Tech",
        skills: ["Python", "FastAPI", "PostgreSQL", "Stripe", "Redis"],
        achievements: [
          "Implementou sistemas de pagamento para 10+ empresas",
          "Especialista em APIs de pagamento",
          "Certificação em Fintech",
        ],
      },
    ],
    advisor: advisors[1],
    year: "2024",
    category: "Web",
    features: [
      "Sistema de pontuação verde",
      "Rastreamento de impacto ambiental",
      "Marketplace de produtos ecológicos",
      "Sistema de avaliação sustentável",
      "Relatórios de pegada de carbono",
    ],
    links: {
      github: "https://github.com/etec-tcc/ecommerce-sustentavel",
    },
  },
  {
    id: 3,
    title: "App de Saúde Mental",
    description: "Aplicativo mobile para acompanhamento do bem-estar emocional de estudantes com recursos de meditação e chat.",
    image: "/mental-health-mobile-app.jpg",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "TensorFlow"],
    members: [
      {
        name: "Beatriz Alves",
        role: "Mobile Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/beatriz-alves",
        email: "beatriz.alves@email.com",
        location: "São Paulo, SP",
        about: "Especialista em desenvolvimento mobile e saúde digital com foco em aplicativos de bem-estar mental.",
        career: "Desenvolve aplicativos de saúde mental e bem-estar para startups de healthtech.",
        expertise: "React Native, Mobile Development, Health Tech",
        skills: ["React Native", "JavaScript", "Firebase", "Health APIs"],
        achievements: [
          "Desenvolveu 5 apps de saúde mental",
          "Especialização em Health Tech",
          "Prêmio de inovação em saúde digital",
        ],
      },
      {
        name: "Gabriel Rocha",
        role: "Backend Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/gabriel-rocha",
        email: "gabriel.rocha@email.com",
        location: "São Paulo, SP",
        about: "Especialista em sistemas de tempo real e chat com experiência em aplicações de saúde mental e comunicação terapêutica.",
        career: "Desenvolve sistemas de comunicação para aplicações de saúde mental e terapia online.",
        expertise: "Real-time Systems, Firebase, MongoDB, Chat Systems",
        skills: ["Node.js", "Socket.io", "Firebase", "MongoDB", "Redis"],
        achievements: [
          "Implementou sistemas de chat para 8+ apps de saúde",
          "Especialista em sistemas de tempo real",
          "Certificação em Firebase",
        ],
      },
    ],
    advisor: advisors[2],
    year: "2024",
    category: "Mobile",
    features: [
      "Acompanhamento de humor diário",
      "Sessões de meditação guiada",
      "Chat com profissionais de saúde",
      "Gamificação do bem-estar",
      "Relatórios de progresso",
      "Sistema de alertas preventivos",
    ],
    links: {
      demo: "https://demo-saude-mental.vercel.app",
      github: "https://github.com/etec-tcc/app-saude-mental",
    },
  },
  {
    id: 4,
    title: "Sistema de Biblioteca Digital",
    description: "Plataforma para gerenciamento de acervo digital com sistema de empréstimos e recomendações personalizadas.",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Elasticsearch"],
    members: [
      {
        name: "Pedro Henrique",
        role: "Full Stack Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/pedro-henrique",
        email: "pedro.henrique@email.com",
        location: "São Paulo, SP",
        about: "Especialista em sistemas de biblioteca e gestão de conteúdo com experiência em plataformas educacionais.",
        career: "Desenvolve sistemas educacionais e de gestão de conhecimento para instituições de ensino.",
        expertise: "Vue.js, Laravel, Content Management, Educational Systems",
        skills: ["Vue.js", "Laravel", "MySQL", "Redis", "Elasticsearch"],
        achievements: [
          "Desenvolveu 4 sistemas de biblioteca",
          "Especialista em gestão de conteúdo",
          "Consultor em digitalização de acervos",
        ],
      },
      {
        name: "Camila Ferreira",
        role: "Backend Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/camila-ferreira",
        email: "camila.ferreira@email.com",
        location: "São Paulo, SP",
        about: "Especialista em algoritmos de recomendação e machine learning com foco em sistemas de busca e descoberta de conteúdo.",
        career: "Desenvolve sistemas de IA e recomendação para plataformas de conteúdo e educação.",
        expertise: "Algorithms, Machine Learning, Laravel, Search Systems",
        skills: ["Python", "Laravel", "TensorFlow", "Elasticsearch", "Redis"],
        achievements: [
          "Implementou algoritmos de recomendação para 6+ plataformas",
          "Especialista em sistemas de busca",
          "Mestrado em Machine Learning",
        ],
      },
    ],
    advisor: advisors[3],
    year: "2023",
    category: "Web",
    features: [
      "Gestão de acervo digital",
      "Sistema de empréstimos online",
      "Recomendações personalizadas",
      "Busca avançada",
      "Reservas e renovações",
      "Relatórios de uso",
    ],
    links: {
      demo: "https://demo-biblioteca.vercel.app",
      github: "https://github.com/etec-tcc/biblioteca-digital",
    },
  },
  {
    id: 5,
    title: "App de Controle Financeiro",
    description: "Aplicativo para controle de gastos pessoais com categorização automática e relatórios detalhados.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "Dart", "SQLite", "Firebase", "Chart.js"],
    members: [
      {
        name: "Isabella Santos",
        role: "Mobile Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/isabella-santos",
        email: "isabella.santos@email.com",
        location: "São Paulo, SP",
        about: "Especialista em aplicativos financeiros com foco em fintechs e soluções de gestão pessoal.",
        career: "Desenvolve aplicativos fintech e soluções de gestão financeira pessoal.",
        expertise: "Flutter, Financial Apps, Mobile UI/UX",
        skills: ["Flutter", "Dart", "Firebase", "SQLite", "Chart.js"],
        achievements: [
          "Desenvolveu 3 apps financeiros",
          "Especialista em Flutter",
          "Certificação em Fintech Development",
        ],
      },
      {
        name: "Matheus Silva",
        role: "Backend Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/matheus-silva",
        email: "matheus.silva@email.com",
        location: "São Paulo, SP",
        about: "Especialista em sistemas financeiros e segurança com experiência em desenvolvimento de APIs para fintechs.",
        career: "Desenvolve sistemas bancários e APIs financeiras para grandes instituições.",
        expertise: "Financial Systems, Security, Firebase, API Development",
        skills: ["Node.js", "Firebase", "SQLite", "Security", "APIs"],
        achievements: [
          "Implementou sistemas de segurança para 5+ fintechs",
          "Especialista em segurança financeira",
          "Certificação em Cybersecurity",
        ],
      },
    ],
    advisor: advisors[0],
    year: "2023",
    category: "Mobile",
    features: [
      "Controle de gastos por categoria",
      "Categorização automática",
      "Relatórios e gráficos",
      "Metas financeiras",
      "Backup na nuvem",
      "Exportação de dados",
    ],
    links: {
      github: "https://github.com/etec-tcc/app-financeiro",
    },
  },
  {
    id: 6,
    title: "Sistema de Delivery",
    description: "Plataforma completa de delivery com painel administrativo, app do cliente e sistema de rastreamento.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Google Maps API"],
    members: [
      {
        name: "Diego Martins",
        role: "Full Stack Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/diego-martins",
        email: "diego.martins@email.com",
        location: "São Paulo, SP",
        about: "Especialista em sistemas de delivery e logística com experiência em plataformas de e-commerce e marketplace.",
        career: "Desenvolve plataformas de entrega e sistemas logísticos para empresas de delivery.",
        expertise: "Delivery Systems, Real-time Tracking, E-commerce",
        skills: ["React", "Node.js", "MongoDB", "Socket.io", "Maps API"],
        achievements: [
          "Desenvolveu 4 plataformas de delivery",
          "Especialista em sistemas logísticos",
          "Consultor em otimização de entregas",
        ],
      },
      {
        name: "Juliana Pereira",
        role: "Backend Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/juliana-pereira",
        email: "juliana.pereira@email.com",
        location: "São Paulo, SP",
        about: "Especialista em sistemas de tempo real e comunicação com experiência em aplicações de rastreamento e notificações.",
        career: "Desenvolve sistemas de rastreamento e comunicação em tempo real para aplicações de delivery.",
        expertise: "Real-time Systems, Socket.io, MongoDB, Notification Systems",
        skills: ["Node.js", "Socket.io", "MongoDB", "Redis", "WebSockets"],
        achievements: [
          "Implementou sistemas de tempo real para 8+ apps",
          "Especialista em WebSockets",
          "Certificação em Real-time Systems",
        ],
      },
    ],
    advisor: advisors[1],
    year: "2023",
    category: "Web",
    features: [
      "Painel administrativo completo",
      "App mobile para clientes",
      "Rastreamento em tempo real",
      "Sistema de avaliações",
      "Gestão de entregadores",
      "Relatórios de performance",
    ],
    links: {
      demo: "https://demo-delivery.vercel.app",
      github: "https://github.com/etec-tcc/sistema-delivery",
    },
  },
  {
    id: 7,
    title: "App de Receitas Inteligente",
    description: "Aplicativo que sugere receitas baseadas nos ingredientes disponíveis e preferências alimentares do usuário.",
    image: "/placeholder.svg",
    technologies: ["React Native", "Python", "TensorFlow", "PostgreSQL", "OpenAI API"],
    members: [
      {
        name: "Amanda Rodrigues",
        role: "Mobile Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/amanda-rodrigues",
        email: "amanda.rodrigues@email.com",
        location: "São Paulo, SP",
        about: "Especialista em apps de culinária e IA com foco em aplicações de foodtech e inteligência artificial.",
        career: "Desenvolve aplicativos com IA para o setor alimentício e culinário.",
        expertise: "Mobile AI, React Native, Food Tech",
        skills: ["React Native", "JavaScript", "TensorFlow", "AI Integration"],
        achievements: [
          "Desenvolveu 3 apps de foodtech",
          "Especialista em IA mobile",
          "Prêmio de inovação em foodtech",
        ],
      },
      {
        name: "Felipe Carvalho",
        role: "AI Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/felipe-carvalho",
        email: "felipe.carvalho@email.com",
        location: "São Paulo, SP",
        about: "Especialista em machine learning e recomendação com foco em sistemas inteligentes para culinária e nutrição.",
        career: "Desenvolve sistemas de IA para recomendação de receitas e análise nutricional.",
        expertise: "Machine Learning, TensorFlow, Python, Recommendation Systems",
        skills: ["Python", "TensorFlow", "PostgreSQL", "OpenAI API", "ML"],
        achievements: [
          "Implementou sistemas de IA para 5+ foodtechs",
          "Especialista em sistemas de recomendação",
          "Mestrado em Machine Learning",
        ],
      },
    ],
    advisor: advisors[2],
    year: "2024",
    category: "Mobile",
    features: [
      "Sugestão inteligente de receitas",
      "Análise de ingredientes disponíveis",
      "Preferências alimentares personalizadas",
      "Análise nutricional",
      "Lista de compras automática",
      "Sistema de avaliações",
    ],
    links: {
      github: "https://github.com/etec-tcc/app-receitas-ia",
    },
  },
  {
    id: 8,
    title: "Sistema de Agendamento Médico",
    description: "Plataforma para agendamento de consultas médicas com integração de calendário e notificações automáticas.",
    image: "/placeholder.svg",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "JWT", "SendGrid"],
    members: [
      {
        name: "Rodrigo Almeida",
        role: "Full Stack Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/rodrigo-almeida",
        email: "rodrigo.almeida@email.com",
        location: "São Paulo, SP",
        about: "Especialista em sistemas médicos e agendamento com experiência em healthtechs e telemedicina.",
        career: "Desenvolve healthtechs e sistemas de agendamento médico para clínicas e hospitais.",
        expertise: "Medical Systems, Scheduling, Angular, Health Tech",
        skills: ["Angular", "TypeScript", "Spring Boot", "PostgreSQL", "JWT"],
        achievements: [
          "Desenvolveu 4 sistemas médicos",
          "Especialista em healthtech",
          "Consultor em telemedicina",
        ],
      },
      {
        name: "Vanessa Torres",
        role: "Backend Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/vanessa-torres",
        email: "vanessa.torres@email.com",
        location: "São Paulo, SP",
        about: "Especialista em sistemas de saúde e segurança com foco em conformidade e proteção de dados médicos.",
        career: "Desenvolve sistemas médicos seguros e em conformidade com regulamentações de saúde.",
        expertise: "Healthcare Systems, Security, Spring Boot, Compliance",
        skills: ["Spring Boot", "Java", "PostgreSQL", "Security", "Compliance"],
        achievements: [
          "Implementou sistemas seguros para 6+ clínicas",
          "Especialista em compliance médico",
          "Certificação em Healthcare Security",
        ],
      },
    ],
    advisor: advisors[3],
    year: "2023",
    category: "Web",
    features: [
      "Agendamento online de consultas",
      "Integração com calendário",
      "Notificações automáticas",
      "Gestão de pacientes",
      "Relatórios médicos",
      "Sistema de lembretes",
    ],
    links: {
      demo: "https://demo-agendamento.vercel.app",
      github: "https://github.com/etec-tcc/sistema-agendamento",
    },
  },
]

export const getProjectById = (id: number): TCCProject | undefined => {
  return tccProjects.find(project => project.id === id)
}

export const getProjectsByCategory = (category: string): TCCProject[] => {
  if (category === 'all') return tccProjects
  return tccProjects.filter(project => project.category.toLowerCase() === category.toLowerCase())
}

export const getProjectsByYear = (year: string): TCCProject[] => {
  if (year === 'all') return tccProjects
  return tccProjects.filter(project => project.year === year)
}

export const searchProjects = (query: string): TCCProject[] => {
  if (!query.trim()) return tccProjects
  
  const searchTerm = query.toLowerCase()
  return tccProjects.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm)) ||
    project.members.some(member => member.name.toLowerCase().includes(searchTerm))
  )
}
