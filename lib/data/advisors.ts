import type { Advisor } from '../types'

export const advisors: Advisor[] = [
  {
    name: "Prof. Rubens Castaldelli Carlos",
    title: "Professor Orientador",
    photo: "/placeholder-user.jpg",
    email: "rubens.carlos@etec.sp.gov.br",
    linkedin: "https://linkedin.com/in/rubens-castaldelli",
    department: "Desenvolvimento de Sistemas",
    about: "Professor com mais de 40 anos de experiência em desenvolvimento de software e arquitetura de sistemas. Especialista em metodologias ágeis, banco de dados e gestão de projetos de tecnologia.",
    expertise: "Desenvolvimento de Software, Arquitetura de Sistemas, Metodologias Ágeis, Banco de Dados",
    achievements: [
      "40+ anos de experiência em desenvolvimento",
      "Orientador de 40+ TCCs aprovados",
    ],
  },
  {
    name: "Dr. Emerson Rodrigo Baião",
    title: "Professora Orientadora",
    photo: "/placeholder-user.jpg",
    email: "emerson.baiao@etec.sp.gov.br",
    linkedin: "https://www.linkedin.com/in/emerson-rodrigo-bai%C3%A3o-18727682/",
    department: "Desenvolvimento de Sistemas",
    about: "Doutor em educação com vasta experiência em desenvolvimento de software, lógica de programação e experiência do usuário.",
    expertise: "Desenvolvimento de Software, Lógica de Programação, Experiência do Usuário",
    achievements: [
      "Doutorado em Educação pela Unicamp",
      "Especialista em Desenvolvimento de Software",
      "Orientador de 40+ projetos",
    ],
  },
]

export const getAdvisorById = (id: number): Advisor | undefined => {
  return advisors[id - 1]
}
