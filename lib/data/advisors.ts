import type { Advisor } from '../types'

export const advisors: Advisor[] = [
  {
    name: "Prof. Dr. Carlos Eduardo Silva",
    title: "Professor Orientador",
    photo: "/placeholder-user.jpg",
    email: "carlos.silva@etec.sp.gov.br",
    linkedin: "https://linkedin.com/in/carlos-eduardo-silva",
    department: "Desenvolvimento de Sistemas",
    about: "Professor doutor com mais de 15 anos de experiência em desenvolvimento de software e arquitetura de sistemas. Especialista em metodologias ágeis e gestão de projetos de tecnologia.",
    expertise: "Desenvolvimento de Software, Arquitetura de Sistemas, Metodologias Ágeis",
    achievements: [
      "Doutorado em Ciência da Computação pela USP",
      "15+ anos de experiência em desenvolvimento",
      "Autor de 20+ artigos científicos",
      "Orientador de 50+ TCCs aprovados",
    ],
  },
  {
    name: "Prof. Dra. Maria Fernanda Santos",
    title: "Professora Orientadora",
    photo: "/placeholder-user.jpg",
    email: "maria.santos@etec.sp.gov.br",
    linkedin: "https://linkedin.com/in/maria-fernanda-santos",
    department: "Desenvolvimento de Sistemas",
    about: "Professora doutora especializada em UX/UI Design e desenvolvimento frontend. Com vasta experiência em projetos de interface e experiência do usuário.",
    expertise: "UX/UI Design, Frontend Development, Design Thinking",
    achievements: [
      "Doutorado em Design pela PUC-SP",
      "Especialista em UX/UI Design",
      "Orientadora de 30+ projetos premiados",
      "Consultora em empresas de tecnologia",
    ],
  },
  {
    name: "Prof. Dr. Roberto Almeida",
    title: "Professor Orientador",
    photo: "/placeholder-user.jpg",
    email: "roberto.almeida@etec.sp.gov.br",
    linkedin: "https://linkedin.com/in/roberto-almeida-dev",
    department: "Desenvolvimento de Sistemas",
    about: "Professor doutor com expertise em desenvolvimento mobile e tecnologias emergentes. Especialista em React Native, Flutter e desenvolvimento de aplicações móveis.",
    expertise: "Mobile Development, React Native, Flutter, IoT",
    achievements: [
      "Doutorado em Engenharia de Software",
      "Especialista em desenvolvimento mobile",
      "Orientador de 25+ apps publicados",
      "Palestrante em eventos de tecnologia",
    ],
  },
  {
    name: "Prof. Dra. Ana Paula Rodrigues",
    title: "Professora Orientadora",
    photo: "/placeholder-user.jpg",
    email: "ana.rodrigues@etec.sp.gov.br",
    linkedin: "https://linkedin.com/in/ana-paula-rodrigues",
    department: "Desenvolvimento de Sistemas",
    about: "Professora doutora especializada em banco de dados e sistemas de informação. Com vasta experiência em modelagem de dados e arquitetura de sistemas corporativos.",
    expertise: "Database Design, Systems Architecture, Business Intelligence",
    achievements: [
      "Doutorado em Sistemas de Informação",
      "Especialista em banco de dados",
      "Consultora em grandes corporações",
      "Orientadora de 40+ sistemas implementados",
    ],
  },
]

export const getAdvisorById = (id: number): Advisor | undefined => {
  return advisors[id - 1]
}
