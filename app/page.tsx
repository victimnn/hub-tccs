import { Navigation } from "@/components/layout/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/project/project-card"
import Link from "next/link"
import { ArrowRight, Code, Users, Trophy, BookOpen, GraduationCap } from "lucide-react"
import { tccProjects } from "@/lib/data/data"
import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Início",
  description: "Explore os projetos inovadores desenvolvidos pelos estudantes da ETEC João Belarmino no curso Técnico em Desenvolvimento de Sistemas.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="main-content" className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `url('/etec-predio.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-8 mb-12">
            <div className="glass p-4 sm:p-6 rounded-xl shadow-glow hover-lift flex items-center justify-center">
              <img src="/etec-logo.png" alt="Logo da ETEC João Belarmino" className="h-16 sm:h-20 w-auto object-contain logo-white" />
            </div>
            <div className="glass p-4 sm:p-6 rounded-xl shadow-glow hover-lift flex items-center justify-center">
              <img src="/cps-logo.png" alt="Logo do Centro Paula Souza" className="h-16 sm:h-20 w-auto object-contain logo-white" />
            </div>
            <div className="glass p-4 sm:p-6 rounded-xl shadow-glow hover-lift flex items-center justify-center">
              <img src="/sp-logo.png" alt="Logo do Estado de São Paulo" className="h-16 sm:h-20 w-auto object-contain logo-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-primary">Hub de TCC's</span>
            <span className="block text-primary mt-2">Desenvolvimento de Sistemas</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Explore os projetos inovadores desenvolvidos pelos estudantes da ETEC João Belarmino. Conheça as soluções
            tecnológicas criadas para resolver problemas reais.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="text-lg px-8 shadow-glow hover-lift">
              <Link href="/projetos">
                Ver Projetos <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 glass hover-lift">
              <Link href="/sobre">Sobre o Curso</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center glass hover-lift shadow-glow">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-primary">8</h3>
                <p className="text-muted-foreground">Projetos Desenvolvidos</p>
              </CardContent>
            </Card>

            <Card className="text-center glass hover-lift shadow-glow">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-primary">35+</h3>
                <p className="text-muted-foreground">Estudantes Envolvidos</p>
              </CardContent>
            </Card>

            <Card className="text-center glass hover-lift shadow-glow">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-primary">25+</h3>
                <p className="text-muted-foreground">Tecnologias Utilizadas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Projetos em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça alguns dos projetos mais inovadores desenvolvidos pelos nossos estudantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tccProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} variant="default" />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="glass hover-lift shadow-glow">
              <Link href="/projetos">
                Ver Todos os Projetos <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
