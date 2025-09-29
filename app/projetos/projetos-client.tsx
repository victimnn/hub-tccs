"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Calendar, Grid, LayoutGrid } from "lucide-react"
import { tccProjects } from "@/lib/data/data"
import { ProjectCard } from "@/components/project/project-card"
import { Carousel } from "@/components/ui/carousel"
import type { TCCProject } from "@/lib/types"

export function ProjetosClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel")

  const filteredProjects = useMemo(() => {
    let filtered = tccProjects

    // Aplicar filtro de busca
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(search) ||
        project.description.toLowerCase().includes(search) ||
        project.technologies.some(tech => tech.toLowerCase().includes(search)) ||
        project.members.some(member => member.name.toLowerCase().includes(search))
      )
    }

    // Aplicar filtro de categoria
    if (categoryFilter !== "all") {
      filtered = filtered.filter(project => 
        project.category.some(cat => cat.toLowerCase() === categoryFilter.toLowerCase())
      )
    }

    // Aplicar filtro de ano
    if (yearFilter !== "all") {
      filtered = filtered.filter(project => project.year === yearFilter)
    }

    return filtered
  }, [searchTerm, categoryFilter, yearFilter])

  const uniqueYears = useMemo(() => {
    const years = [...new Set(tccProjects.map(project => project.year))]
    return years.sort((a, b) => b.localeCompare(a))
  }, [])

  return (
    <div className="mt-10 pt-24 pb-16 px-4">
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
                <Input 
                  placeholder="Buscar projetos..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Buscar projetos por título, descrição, tecnologias ou membros da equipe"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[140px]" aria-label="Filtrar por categoria">
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

              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger className="w-[120px]" aria-label="Filtrar por ano">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Ano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  {uniqueYears.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "carousel" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("carousel")}
                  className="rounded-r-none"
                  aria-label="Visualização em carrossel"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-l-none"
                  aria-label="Visualização em grade"
                >
                  <Grid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''} encontrado{filteredProjects.length !== 1 ? 's' : ''}
            {searchTerm && ` para "${searchTerm}"`}
            {categoryFilter !== "all" && ` na categoria ${categoryFilter}`}
            {yearFilter !== "all" && ` do ano ${yearFilter}`}
          </p>
        </div>

        {/* Projects Display */}
        {filteredProjects.length > 0 ? (
          viewMode === "carousel" ? (
            <Carousel
              itemsPerView={{ mobile: 1, tablet: 2, desktop: 4 }}
              showArrows={true}
              showDots={true}
              autoplay={false}
              autoplayInterval={6000}
              gap={24}
              className="mb-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} variant="detailed" />
              ))}
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} variant="detailed" />
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">Nenhum projeto encontrado</h3>
              <p>Tente ajustar os filtros ou termos de busca para encontrar projetos.</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("")
                setCategoryFilter("all")
                setYearFilter("all")
              }}
            >
              Limpar Filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

