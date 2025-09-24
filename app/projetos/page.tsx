import { Navigation } from "@/components/layout/navigation"
import { ProjetosClient } from "./projetos-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projetos",
  description: "Conheça os projetos de TCC's do Curso de DS da ETEC João Belarmino.",
}

export default function ProjetosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProjetosClient />
    </div>
  )
}
