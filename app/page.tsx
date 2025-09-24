import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Code, Users, Trophy, BookOpen, GraduationCap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/modern-technical-school-building-facade-etec-archi.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative container mx-auto text-center">
          <div className="flex justify-center gap-8 mb-8">
            <div className="bg-card p-4 rounded-lg border">
              <img src="/etec-jo-o-belarmino-logo.jpg" alt="ETEC João Belarmino" className="h-16 w-auto" />
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <img src="/centro-paula-souza-logo.jpg" alt="Centro Paula Souza" className="h-16 w-auto" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Hub de TCCs
            <span className="block text-primary">Desenvolvimento de Sistemas</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Explore os projetos inovadores desenvolvidos pelos estudantes da ETEC João Belarmino. Conheça as soluções
            tecnológicas criadas para resolver problemas reais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/projetos">
                Ver Projetos <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/sobre">Sobre o Curso</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">Projetos Desenvolvidos</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">200+</h3>
                <p className="text-muted-foreground">Estudantes Envolvidos</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">15+</h3>
                <p className="text-muted-foreground">Tecnologias Utilizadas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos projetos mais inovadores desenvolvidos pelos nossos estudantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Sistema de Gestão Escolar",
                description: "Plataforma completa para gerenciamento de notas, frequência e comunicação escolar.",
                technologies: ["React", "Node.js", "MySQL"],
                image: "/school-management-dashboard.png",
              },
              {
                title: "E-commerce Sustentável",
                description: "Marketplace focado em produtos ecológicos com sistema de pontuação verde.",
                technologies: ["Next.js", "Python", "PostgreSQL"],
                image: "/sustainable-ecommerce.png",
              },
              {
                title: "App de Saúde Mental",
                description: "Aplicativo para acompanhamento do bem-estar emocional de estudantes.",
                technologies: ["React Native", "Firebase", "Node.js"],
                image: "/mental-health-mobile-app.jpg",
              },
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/projetos">
                Ver Todos os Projetos <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-semibold">ETEC João Belarmino</span>
          </div>
          <p className="text-muted-foreground mb-2">Curso Técnico em Desenvolvimento de Sistemas</p>
          <p className="text-sm text-muted-foreground">© 2025 Centro Paula Souza. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
