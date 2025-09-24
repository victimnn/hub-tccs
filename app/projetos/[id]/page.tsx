import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, Code, ExternalLink, Github, Globe, Download, Play, ImageIcon } from "lucide-react"
import { notFound } from "next/navigation"
import { TeamMemberPopup } from "@/components/team-member-popup"

// Mock data for TCC details
const getTCCById = (id: string) => {
  const tccs = [
    {
      id: 1,
      title: "Sistema de Gestão Escolar",
      description:
        "Plataforma completa para gerenciamento de notas, frequência e comunicação entre escola, alunos e responsáveis.",
      fullDescription: `O Sistema de Gestão Escolar é uma plataforma web completa desenvolvida para modernizar e otimizar os processos administrativos e pedagógicos de instituições de ensino. 

O projeto surgiu da necessidade observada em escolas da região que ainda utilizavam métodos manuais ou sistemas desatualizados para gerenciar informações acadêmicas.

A plataforma oferece diferentes níveis de acesso para professores, alunos, responsáveis e administradores, garantindo que cada usuário tenha acesso apenas às informações relevantes ao seu perfil. O sistema permite o lançamento de notas, controle de frequência, comunicação direta entre escola e família, além de relatórios detalhados sobre o desempenho acadêmico.

Uma das principais inovações do projeto é o módulo de comunicação integrada, que permite o envio de notificações automáticas para responsáveis sobre faltas, notas baixas ou eventos escolares importantes.`,
      image: "/school-management-dashboard.png",
      gallery: [
        "/school-management-dashboard.png",
        "/student-dashboard-interface.png",
        "/teacher-grade-management.jpg",
        "/parent-communication-portal.jpg",
      ],
      technologies: ["React", "Node.js", "MySQL", "Express", "JWT", "Socket.io"],
      members: [
        {
          name: "Ana Silva",
          role: "Full Stack Developer",
          photo: "/professional-woman-developer.png",
          linkedin: "https://linkedin.com/in/ana-silva",
          email: "ana.silva@email.com",
          location: "São Paulo, SP",
          about:
            "Desenvolvedora apaixonada por tecnologia com 3 anos de experiência em desenvolvimento web. Especializada em criar interfaces intuitivas e sistemas robustos que fazem a diferença na vida das pessoas.",
          career:
            "Atualmente trabalha como Desenvolvedora Full Stack na TechCorp, onde lidera projetos de transformação digital para o setor educacional.",
          expertise: "Frontend Development, UI/UX Design, React, Node.js",
          skills: ["React", "TypeScript", "Node.js", "MySQL", "Figma", "Git"],
          achievements: [
            "Liderou o desenvolvimento de 5 projetos web de grande escala",
            "Certificação em React Advanced Patterns",
            "Palestrante em eventos de tecnologia regionais",
          ],
        },
        {
          name: "Carlos Santos",
          role: "Backend Developer",
          photo: "/professional-man-developer.png",
          linkedin: "https://linkedin.com/in/carlos-santos",
          email: "carlos.santos@email.com",
          location: "São Paulo, SP",
          about:
            "Desenvolvedor backend especializado em arquiteturas escaláveis e seguras. Tem experiência sólida em bancos de dados e APIs REST, sempre focando em performance e boas práticas.",
          career:
            "Trabalha como Backend Developer na DataSolutions, desenvolvendo sistemas críticos para grandes empresas do setor financeiro.",
          expertise: "Backend Development, Database Design, API Development",
          skills: ["Node.js", "Express", "MySQL", "MongoDB", "Docker", "AWS"],
          achievements: [
            "Otimizou performance de APIs em 300%",
            "Implementou arquitetura de microserviços",
            "Certificação AWS Solutions Architect",
          ],
        },
        {
          name: "Maria Oliveira",
          role: "Frontend Developer & UI/UX Designer",
          photo: "/professional-woman-frontend-developer.jpg",
          linkedin: "https://linkedin.com/in/maria-oliveira",
          email: "maria.oliveira@email.com",
          location: "São Paulo, SP",
          about:
            "Designer e desenvolvedora frontend com olhar apurado para experiência do usuário. Combina conhecimentos técnicos com sensibilidade estética para criar produtos digitais excepcionais.",
          career:
            "Atua como UI/UX Designer na DesignStudio, onde desenvolve interfaces para startups e empresas de tecnologia em crescimento.",
          expertise: "UI/UX Design, Frontend Development, Design Systems",
          skills: ["React", "CSS", "Figma", "Adobe XD", "JavaScript", "Tailwind CSS"],
          achievements: [
            "Criou design system usado por 10+ produtos",
            "Vencedora do prêmio 'Melhor Interface' no Hackathon ETEC 2024",
            "Portfólio com 50+ projetos de design",
          ],
        },
      ],
      year: "2024",
      category: "Web",
      features: [
        "Gestão de notas e frequência",
        "Portal do aluno e responsável",
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
  ]

  return tccs.find((tcc) => tcc.id === Number.parseInt(id))
}

interface PageProps {
  params: {
    id: string
  }
}

export default function TCCDetailsPage({ params }: PageProps) {
  const tcc = getTCCById(params.id)

  if (!tcc) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/projetos">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar aos Projetos
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{tcc.category}</Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{tcc.year}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{tcc.title}</h1>

                <p className="text-xl text-muted-foreground mb-6 text-pretty">{tcc.description}</p>

                <div className="flex flex-wrap gap-3">
                  {tcc.links.demo && (
                    <Button asChild>
                      <a href={tcc.links.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="mr-2 h-4 w-4" />
                        Ver Demo
                      </a>
                    </Button>
                  )}

                  {tcc.links.github && (
                    <Button variant="outline" asChild>
                      <a href={tcc.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código Fonte
                      </a>
                    </Button>
                  )}

                  {tcc.links.documentation && (
                    <Button variant="outline" asChild>
                      <a href={tcc.links.documentation} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Documentação
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="lg:w-1/3">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      Equipe do Projeto
                    </h3>

                    <div className="space-y-4">
                      {tcc.members.map((member, index) => (
                        <TeamMemberPopup key={index} member={member}>
                          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                            <img
                              src={member.photo || "/placeholder.svg"}
                              alt={member.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <p className="font-medium">{member.name}</p>
                              <p className="text-sm text-muted-foreground">{member.role}</p>
                            </div>
                            <Button size="sm" variant="ghost">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </TeamMemberPopup>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="mb-12">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img src={tcc.image || "/placeholder.svg"} alt={tcc.title} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Sobre o Projeto</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {tcc.fullDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Features */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Principais Funcionalidades</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tcc.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Gallery */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <ImageIcon className="mr-2 h-5 w-5" />
                  Galeria de Imagens
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tcc.gallery.map((image, index) => (
                    <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${tcc.title} - Imagem ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Code className="mr-2 h-4 w-4" />
                    Tecnologias Utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tcc.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Informações do Projeto</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Categoria:</span>
                      <span>{tcc.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ano:</span>
                      <span>{tcc.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Equipe:</span>
                      <span>{tcc.members.length} pessoas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Share */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Compartilhar</h3>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Globe className="mr-2 h-4 w-4" />
                      Link
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Compartilhar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
