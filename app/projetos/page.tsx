import { Navigation } from "@/components/navigation"
import { ProjetosClient } from "./projetos-client"
import type { Metadata } from "next"

export default function ProjetosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProjetosClient />
    </div>
  )
}
