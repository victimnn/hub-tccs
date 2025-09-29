export interface TeamMember {
  name: string
  role: string
  photo: string
  linkedin?: string
  email?: string
  location?: string
  about: string
  career: string
  expertise: string
  skills?: string[]
  achievements?: string[]
  instagram?: string
}

export interface Advisor {
  name: string
  title: string
  photo: string
  email?: string
  linkedin?: string
  department?: string
  about: string
  expertise: string
  achievements?: string[]
}

export interface ProjectLinks {
  demo?: string
  github?: string
  documentation?: string
}

export interface TCCProject {
  id: number
  title: string
  description: string
  fullDescription?: string
  image: string
  gallery?: string[]
  technologies: string[]
  members: TeamMember[]
  advisor: Advisor
  year: string
  category: string[]
  features?: string[]
  links?: ProjectLinks
}

export interface NavigationItem {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

export interface FilterOptions {
  category: string
  year: string
  search: string
}

export interface StatsCard {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
}
