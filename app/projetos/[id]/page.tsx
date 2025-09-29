import { Navigation } from "@/components/layout/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectTeam } from "@/components/project/project-team"
import { ProjectTechnologies } from "@/components/project/project-technologies"
import { ProjectInfo } from "@/components/project/project-info"
import { ImageGallery } from "@/components/project/image-gallery"
import { ShareButtons } from "@/components/project/share-buttons"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Globe, Download, Play, ImageIcon, Calendar } from "lucide-react"
import { notFound } from "next/navigation"
import { getProjectById } from "@/lib/data/data"
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

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <Link href="/projetos">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar aos Projetos
              </Link>
            </Button>
          </div>

          {/* Header com imagem integrada */}
          <div className="mb-8">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
              {/* Conteúdo principal */}
              <div className="xl:col-span-2">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex gap-2">
                    {project.category.map((cat, index) => (
                      <Badge key={index} variant="secondary">{cat}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">{project.title}</h1>

                <p className="text-lg text-muted-foreground mb-4 text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.links?.demo && (
                    <Button asChild size="sm">
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="mr-2 h-4 w-4" />
                        Ver Demo
                      </a>
                    </Button>
                  )}

                  {project.links?.github && (
                    <Button variant="outline" asChild size="sm">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                  )}

                  {project.links?.documentation && (
                    <Button variant="outline" asChild size="sm">
                      <a href={project.links.documentation} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Docs
                      </a>
                    </Button>
                  )}
                </div>

                {/* Imagem principal integrada */}
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="max-w-full max-h-full object-contain" />
                </div>

                {/* Sobre o Projeto - Logo abaixo da imagem */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    {project.fullDescription ? (
                      project.fullDescription.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground leading-relaxed mb-3">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        {project.description}
                      </p>
                    )}
                  </div>
                </section>
              </div>

              {/* Sidebar compacta */}
              <div className="xl:col-span-1 space-y-6">
                <ProjectTeam project={project} variant="compact" />
                <ProjectInfo project={project} variant="sidebar" />
                <ProjectTechnologies project={project} variant="sidebar" />
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="xl:col-span-2 space-y-8">

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Principais Funcionalidades</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <ImageIcon className="mr-2 h-5 w-5" />
                    Galeria de Imagens
                  </h2>
                  <ImageGallery 
                    images={project.gallery} 
                    projectTitle={project.title}
                  />
                </section>
              )}
            </div>

            {/* Sidebar adicional (compartilhar) */}
            <div className="xl:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Compartilhar</h3>
                  <ShareButtons 
                    projectTitle={project.title}
                    projectDescription={project.description}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
