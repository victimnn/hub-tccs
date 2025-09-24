import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectTeam } from "@/components/project-team"
import { ProjectTechnologies } from "@/components/project-technologies"
import { ProjectInfo } from "@/components/project-info"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Globe, Download, Play, ImageIcon, Calendar } from "lucide-react"
import { notFound } from "next/navigation"
import { getProjectById } from "@/lib/data"
import type { Metadata } from "next"

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectById(Number.parseInt(params.id))
  
  if (!project) {
    return {
      title: "Projeto não encontrado",
      description: "O projeto solicitado não foi encontrado.",
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

interface PageProps {
  params: {
    id: string
  }
}

export default function TCCDetailsPage({ params }: PageProps) {
  const project = getProjectById(Number.parseInt(params.id))

  if (!project) {
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
                  <Badge variant="secondary">{project.category}</Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{project.title}</h1>

                <p className="text-xl text-muted-foreground mb-6 text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-3">
                  {project.links?.demo && (
                    <Button asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="mr-2 h-4 w-4" />
                        Ver Demo
                      </a>
                    </Button>
                  )}

                  {project.links?.github && (
                    <Button variant="outline" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código Fonte
                      </a>
                    </Button>
                  )}

                  {project.links?.documentation && (
                    <Button variant="outline" asChild>
                      <a href={project.links.documentation} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Documentação
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="lg:w-1/3">
                <ProjectTeam project={project} variant="sidebar" />
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="mb-12">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Sobre o Projeto</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {project.fullDescription ? (
                    project.fullDescription.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  )}
                </div>
              </section>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-6">Principais Funcionalidades</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <ImageIcon className="mr-2 h-5 w-5" />
                    Galeria de Imagens
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - Imagem ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <ProjectTechnologies project={project} variant="sidebar" />
              <ProjectInfo project={project} variant="sidebar" />

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
