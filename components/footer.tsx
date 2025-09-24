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
        <p className="text-sm text-muted-foreground">© 2025 DS-EtecJB. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
