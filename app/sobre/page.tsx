import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code, 
  Database, 
  Globe, 
  Smartphone,
  Target,
  TrendingUp,
  Calendar,
  UserCheck
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça o Hub de TCC's da ETEC João Belarmino e saiba mais sobre o curso Técnico em Desenvolvimento de Sistemas.",
}

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative container mx-auto text-center">
          <div className="flex justify-center gap-8 mb-12">
            <div className="glass p-6 rounded-xl shadow-glow hover-lift flex items-center justify-center">
              <img src="/sp-logo.png" alt="Logo do Estado de São Paulo" className="h-20 w-auto object-contain logo-white" />
            </div>
            <div className="glass p-6 rounded-xl shadow-glow hover-lift flex items-center justify-center">
              <img src="/cps-logo.png" alt="Logo do Centro Paula Souza" className="h-20 w-auto object-contain logo-white" />
            </div>
            <div className="glass p-6 rounded-xl shadow-glow hover-lift flex items-center justify-center">
              <img src="/etec-logo.png" alt="Logo da ETEC João Belarmino" className="h-20 w-auto object-contain logo-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-primary">Sobre o Curso</span>
            <span className="block text-primary/80 mt-2">Desenvolvimento de Sistemas</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Conheça mais sobre o curso Técnico em Desenvolvimento de Sistemas da ETEC João Belarmino e 
            os projetos inovadores desenvolvidos pelos nossos estudantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="text-lg px-8 shadow-glow hover-lift">
              <Link href="/projetos">
                Ver Projetos <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 glass hover-lift">
              <Link href="#contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Nossos Números</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dados que refletem a excelência e o compromisso do curso com a formação de profissionais qualificados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center glass hover-lift shadow-glow">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-primary">8</h3>
                <p className="text-muted-foreground">Projetos TCC Desenvolvidos</p>
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
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-primary">95%</h3>
                <p className="text-muted-foreground">Taxa de Aprovação</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Course */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Sobre o Curso</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O curso Técnico em Desenvolvimento de Sistemas prepara profissionais para o mercado de tecnologia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="glass hover-lift shadow-glow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">ETEC João Belarmino</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A ETEC João Belarmino é uma instituição de ensino técnico reconhecida pela excelência na formação de
                  profissionais qualificados para o mercado de trabalho. Localizada em São Paulo, oferece educação de qualidade
                  com foco na prática e inovação tecnológica.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Amparo, São Paulo</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Curso com duração de 3 semestres</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <UserCheck className="h-4 w-4 text-primary" />
                    <span>Modalidade: Presencial</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover-lift shadow-glow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Objetivos do Curso</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Formar profissionais capazes de atuar em todas as etapas do desenvolvimento de software, desde a análise
                  de requisitos até a implementação e manutenção de sistemas. O curso prepara para trabalhar com tecnologias
                  modernas e metodologias ágeis.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Code className="h-4 w-4 text-primary" />
                    <span>Programação</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Database className="h-4 w-4 text-primary" />
                    <span>Banco de Dados</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-primary" />
                    <span>Desenvolvimento Web</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Smartphone className="h-4 w-4 text-primary" />
                    <span>Mobile</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Entre em Contato</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tem alguma dúvida sobre os projetos ou quer saber mais sobre o curso? Entre em contato conosco!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass shadow-glow">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">Endereço</p>
                          <p className="text-muted-foreground text-sm">ETEC João Belarmino, Amparo - SP</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-muted-foreground text-sm">contato@etecjoaobelarmino.sp.gov.br</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">Telefone</p>
                          <p className="text-muted-foreground text-sm">(19) 3817-XXXX</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="text-center space-y-4">
                      <p className="text-muted-foreground">
                        Visite nosso site oficial ou entre em contato para mais informações sobre o curso e os projetos.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild className="shadow-glow hover-lift">
                          <a href="mailto:contato@etecjoaobelarmino.sp.gov.br">
                            <Mail className="mr-2 h-4 w-4" />
                            Enviar Email
                          </a>
                        </Button>
                        <Button variant="outline" asChild className="glass hover-lift">
                          <a href="https://etecjoaobelarmino.sp.gov.br" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Site Oficial
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-bg border-t border-border/50 py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <img src="/ds-logo.png" alt="Logo Desenvolvimento de Sistemas" className="h-6 w-auto object-contain logo-white" />
            </div>
            <span className="text-3xl font-bold text-primary">TCC's Desenvolvimento de Sistemas</span>
          </div>
          <p className="text-lg text-muted-foreground mb-2">ETEC João Belarmino - Desenvolvimento de Sistemas</p>
          <p className="text-sm text-muted-foreground">© 2025 DS-EtecJB. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
