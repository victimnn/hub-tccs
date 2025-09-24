import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, BookOpen, Award, MapPin, Mail, Phone, ExternalLink } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <GraduationCap className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre o <span className="text-primary">Hub de TCCs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Uma plataforma dedicada a showcasing dos melhores Trabalhos de Conclusão de Curso do curso Técnico em
              Desenvolvimento de Sistemas da ETEC João Belarmino
            </p>
          </div>

          {/* Mission */}
          <section className="mb-16">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Nossa Missão</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  O Hub de TCCs foi criado para valorizar e dar visibilidade aos projetos desenvolvidos pelos estudantes
                  do curso Técnico em Desenvolvimento de Sistemas. Nossa plataforma serve como um portfólio digital que
                  demonstra a qualidade técnica e criatividade dos futuros profissionais da área de tecnologia.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* About ETEC */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">ETEC João Belarmino</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A ETEC João Belarmino é uma instituição de ensino técnico reconhecida pela excelência na formação de
                    profissionais qualificados para o mercado de trabalho. O curso Técnico em Desenvolvimento de
                    Sistemas prepara estudantes para atuar em todas as etapas do desenvolvimento de software.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>São Paulo, SP</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>contato@etecjoaobelarmino.sp.gov.br</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>(11) 1234-5678</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">O Curso</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    O curso Técnico em Desenvolvimento de Sistemas oferece formação completa em programação, banco de
                    dados, análise de sistemas e desenvolvimento web e mobile. Os estudantes desenvolvem projetos
                    práticos que simulam situações reais do mercado de trabalho.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Programação</Badge>
                    <Badge variant="secondary">Banco de Dados</Badge>
                    <Badge variant="secondary">Desenvolvimento Web</Badge>
                    <Badge variant="secondary">Mobile</Badge>
                    <Badge variant="secondary">Análise de Sistemas</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Statistics */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Nossos Números</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <p className="text-muted-foreground">TCCs Desenvolvidos</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">450+</div>
                  <p className="text-muted-foreground">Estudantes Formados</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <p className="text-muted-foreground">Taxa de Empregabilidade</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact */}
          <section>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Users className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Entre em Contato</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Tem alguma dúvida sobre os projetos ou quer saber mais sobre o curso? Entre em contato conosco ou
                  visite nossa escola.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <a href="mailto:contato@etecjoaobelarmino.sp.gov.br">
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar Email
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://etecjoaobelarmino.sp.gov.br" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Site Oficial
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
