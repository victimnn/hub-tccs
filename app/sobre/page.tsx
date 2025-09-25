import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
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
            <span className="text-primary">Sobre o Curso</span>
            <span className="block text-primary/80 mt-2">Desenvolvimento de Sistemas</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Conheça mais sobre o curso Técnico em Desenvolvimento de Sistemas integrado ao ensino médio da ETEC João Belarmino e 
            os projetos inovadores desenvolvidos pelos nossos estudantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="text-lg px-8 shadow-glow hover-lift">
              <Link href="/projetos">
                Ver Projetos <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 glass hover-lift">
              <Link href="https://dsetec.vercel.app">Site Oficial do Curso</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Course */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Sobre o Curso</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O curso Técnico em Desenvolvimento de Sistemas integrado ao ensino médio prepara profissionais para o mercado de tecnologia com conhecimentos em programação, banco de dados, desenvolvimento web, mobile e outras tecnologias.
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
                  profissionais qualificados para o mercado de trabalho. Localizada em Amparo, oferece educação de qualidade
                  com foco na prática e inovação tecnológica.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Amparo, São Paulo</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Curso com duração de 3 anos</span>
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
      <section id="contato" className="py-5 px-4 gradient-bg">
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
                          <p className="text-muted-foreground text-sm">Rua Sete de Setembro, 299 - Centro</p>
                          <p className="text-muted-foreground text-sm">Amparo (SP) | CEP: 13900-372</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">Telefones</p>
                          <p className="text-muted-foreground text-sm">(19) 3807-2288 | 3807-8982 | 3808-1016</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">Emails</p>
                          <p className="text-muted-foreground text-sm">Dir. Acadêmica: e067acad@cps.sp.gov.br</p>
                          <p className="text-muted-foreground text-sm">Dir. Serviços: e067adm@cps.sp.gov.br</p>
                          <p className="text-muted-foreground text-sm">APM: apmjb@yahoo.com.br</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="text-center space-y-6">
                      <p className="text-muted-foreground">
                        Visite nosso site oficial ou entre em contato para mais informações sobre o curso e os projetos.
                      </p>
                      
                      <div className="flex flex-col gap-4 justify-center items-center">
                        <Button asChild size="lg" className="shadow-glow hover-lift w-full max-w-sm">
                          <a href="mailto:e067acad@cps.sp.gov.br">
                            <Mail className="mr-2 h-4 w-4" />
                            Enviar Email para a Direção Acadêmica
                          </a>
                        </Button>
                        <Button variant="outline" asChild size="lg" className="glass hover-lift w-full max-w-sm">
                          <a href="https://www.etecjoaobelarmino.com.br/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Site Oficial da ETEC João Belarmino
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

      <Footer />
    </div>
  )
}
