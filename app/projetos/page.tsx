import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Search, Filter, Users, Calendar, ExternalLink } from "lucide-react"

// Mock data for TCCs
const tccs = [
  {
    id: 1,
    title: "Sistema de Gestão Escolar",
    description:
      "Plataforma completa para gerenciamento de notas, frequência e comunicação entre escola, alunos e responsáveis.",
    image: "/school-management-dashboard.png",
    technologies: ["React", "Node.js", "MySQL", "Express"],
    members: ["Ana Silva", "Carlos Santos", "Maria Oliveira"],
    year: "2024",
    category: "Web",
  },
  {
    id: 2,
    title: "E-commerce Sustentável",
    description:
      "Marketplace focado em produtos ecológicos com sistema de pontuação verde e rastreamento de impacto ambiental.",
    image: "/sustainable-ecommerce.png",
    technologies: ["Next.js", "Python", "PostgreSQL", "Stripe"],
    members: ["João Pedro", "Fernanda Costa", "Ricardo Lima"],
    year: "2024",
    category: "Web",
  },
  {
    id: 3,
    title: "App de Saúde Mental",
    description:
      "Aplicativo mobile para acompanhamento do bem-estar emocional de estudantes com recursos de meditação e chat.",
    image: "/mental-health-mobile-app.jpg",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
    members: ["Beatriz Alves", "Gabriel Rocha", "Larissa Mendes"],
    year: "2024",
    category: "Mobile",
  },
  {
    id: 4,
    title: "Sistema de Biblioteca Digital",
    description:
      "Plataforma para gerenciamento de acervo digital com sistema de empréstimos e recomendações personalizadas.",
    image: "/placeholder.svg?key=lib01",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    members: ["Pedro Henrique", "Camila Ferreira", "Lucas Barbosa"],
    year: "2023",
    category: "Web",
  },
  {
    id: 5,
    title: "App de Controle Financeiro",
    description: "Aplicativo para controle de gastos pessoais com categorização automática e relatórios detalhados.",
    image: "/placeholder.svg?key=fin01",
    technologies: ["Flutter", "Dart", "SQLite", "Firebase"],
    members: ["Isabella Santos", "Matheus Silva", "Sophia Lima"],
    year: "2023",
    category: "Mobile",
  },
  {
    id: 6,
    title: "Sistema de Delivery",
    description: "Plataforma completa de delivery com painel administrativo, app do cliente e sistema de rastreamento.",
    image: "/placeholder.svg?key=del01",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    members: ["Diego Martins", "Juliana Pereira", "Thiago Nascimento"],
    year: "2023",
    category: "Web",
  },
  {
    id: 7,
    title: "App de Receitas Inteligente",
    description:
      "Aplicativo que sugere receitas baseadas nos ingredientes disponíveis e preferências alimentares do usuário.",
    image: "/placeholder.svg?key=rec01",
    technologies: ["React Native", "Python", "TensorFlow", "PostgreSQL"],
    members: ["Amanda Rodrigues", "Felipe Carvalho", "Natália Gomes"],
    year: "2024",
    category: "Mobile",
  },
  {
    id: 8,
    title: "Sistema de Agendamento Médico",
    description:
      "Plataforma para agendamento de consultas médicas com integração de calendário e notificações automáticas.",
    image: "/placeholder.svg?key=med01",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "JWT"],
    members: ["Rodrigo Almeida", "Vanessa Torres", "Bruno Dias"],
    year: "2023",
    category: "Web",
  },
  {
    id: 9,
    title: "App de Transporte Escolar",
    description: "Aplicativo para monitoramento de transporte escolar com GPS em tempo real e comunicação com pais.",
    image: "/placeholder.svg?key=tra01",
    technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
    members: ["Carla Souza", "Eduardo Ribeiro", "Priscila Moura"],
    year: "2024",
    category: "Mobile",
  },
]

export default function ProjetosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Projetos <span className="text-primary">TCC</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explore os Trabalhos de Conclusão de Curso desenvolvidos pelos estudantes do curso Técnico em
              Desenvolvimento de Sistemas da ETEC João Belarmino
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card rounded-lg border p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Buscar projetos..." className="pl-10" />
                </div>
              </div>

              <div className="flex gap-4">
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="web">Web</SelectItem>
                    <SelectItem value="mobile">Mobile</SelectItem>
                    <SelectItem value="desktop">Desktop</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[120px]">
                    <Calendar className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Ano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tccs.map((tcc) => (
              <Card key={tcc.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={tcc.image || "/placeholder.svg"}
                      alt={tcc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {tcc.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{tcc.year}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {tcc.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{tcc.description}</p>

                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{tcc.members.length} integrantes</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tcc.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {tcc.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{tcc.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <Button asChild className="w-full">
                      <Link href={`/projetos/${tcc.id}`}>
                        Ver Detalhes <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar Mais Projetos
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
