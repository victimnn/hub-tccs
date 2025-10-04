import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="gradient-bg border-t border-border/50 py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <img src="/ds-logo.png" alt="Logo Desenvolvimento de Sistemas" className="h-auto w-auto object-contain logo-white" />
          </div>
          <span className="text-3xl font-bold text-primary">TCC's Desenvolvimento de Sistemas</span>
        </div>
        <p className="text-lg text-muted-foreground mb-2">ETEC João Belarmino - Desenvolvimento de Sistemas</p>
        
        {/* Developer Info */}
        <div className="mb-6 p-4 bg-card/50 rounded-lg border border-border/30 max-w-md mx-auto">
          <p className="text-sm text-muted-foreground mb-3">Desenvolvido por</p>
          <p className="font-semibold text-primary mb-3">Victor Gabriel Prado Ramos</p>
          <div className="flex justify-center gap-4">
            <Link 
              href="https://github.com/victimnn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link 
              href="https://linkedin.com/in/victor-ramos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">© 2025 DS-EtecJB. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
