import { MetadataRoute } from 'next'
import { tccProjects } from '@/lib/data/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hubtcc.vercel.app'
  
  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projetos`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Páginas dinâmicas dos projetos
  const projectPages = tccProjects.map((project) => ({
    url: `${baseUrl}/projetos/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...projectPages]
}
