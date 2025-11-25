import { Navigation } from "@/components/layout/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/project/project-card"
import { Carousel } from "@/components/ui/carousel"
import Link from "next/link"
import { ArrowRight, Code, Users, Trophy, BookOpen, GraduationCap, UserCheck } from "lucide-react"
import { tccProjects } from "@/lib/data/data"
import { advisors, coordinator } from "@/lib/data/advisors"
import { AdvisorPopup } from "@/components/team/advisor-popup"
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
      <section className="relative pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 mt-16 sm:mt-10 md:mt-15 overflow-hidden">
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
          <div className="flex items-center justify-center gap-3 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
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

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 text-balance">
            <span className="text-primary">Hub de TCC's</span>
            <span className="block text-primary mt-2">Desenvolvimento de Sistemas</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto text-pretty text-justify">
          No dia 28 de novembro, os alunos apresentam seus Trabalhos de Conclusão de Curso. Uma oportunidade para conhecer projetos inovadores e soluções criativas desenvolvidas ao longo da formação. Venha prestigiar e se inspirar com o futuro da tecnologia!
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

      {/* Coordenadora do Curso */}
      <section className="py-12 sm:py-16 md:py-20 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-primary">Coordenadora do Curso</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça a coordenadora responsável pela gestão e organização do curso
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <AdvisorPopup advisor={coordinator}>
              <Card className="glass hover-lift shadow-glow cursor-pointer transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative">
                      <img
                        src={coordinator.photo || "/placeholder.svg"}
                        alt={coordinator.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-3">
                        <UserCheck className="h-6 w-6" />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">{coordinator.name}</h3>
                      <p className="text-lg text-muted-foreground mb-4">{coordinator.title}</p>
                      <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                        {coordinator.expertise.split(", ").map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {coordinator.about}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AdvisorPopup>
          </div>
        </div>
      </section>

      {/* Professores Orientadores */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-primary">Professores Orientadores</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça os professores que orientaram e apoiaram o desenvolvimento dos projetos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {advisors.map((advisor) => (
              <AdvisorPopup key={advisor.name} advisor={advisor}>
                <Card className="glass hover-lift shadow-glow cursor-pointer transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <img
                          src={advisor.photo || "/placeholder.svg"}
                          alt={advisor.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                          <GraduationCap className="h-4 w-4" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{advisor.name}</h3>
                        <p className="text-muted-foreground mb-3">{advisor.title}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {advisor.expertise.split(", ").slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {advisor.about}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AdvisorPopup>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 gradient-bg">
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
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-primary">Projetos em Destaque</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça alguns dos projetos mais inovadores desenvolvidos pelos nossos estudantes
            </p>
          </div>

          <Carousel
            itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
            showArrows={true}
            showDots={true}
            autoplay={true}
            autoplayInterval={5000}
            gap={24}
            className="mb-16"
          >
            {tccProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="detailed" inCarousel={true} />
            ))}
          </Carousel>

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
