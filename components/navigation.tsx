"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { GraduationCap, Home, Users, BookOpen, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    href: "/",
    label: "Início",
    icon: Home,
  },
  {
    href: "/projetos",
    label: "Projetos",
    icon: BookOpen,
  },
  {
    href: "/sobre",
    label: "Sobre",
    icon: Users,
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav id="main-navigation" className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img src="/ds-logo.png" alt="Logo Desenvolvimento de Sistemas" className="h-20 w-auto object-contain logo-white" />
            <div className="flex flex-col">
              <span className="font-bold text-lg">TCC's Desenvolvimento de Sistemas</span>
              <span className="text-xs text-muted-foreground">ETEC João Belarmino</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted hover:text-foreground text-muted-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-left">
                  <img src="/ds-logo.png" alt="Logo Desenvolvimento de Sistemas" className="h-15 w-auto object-contain logo-white" />
                    <div className="flex flex-col">
                      <span className="font-bold">TCC's DS</span>
                      <span className="text-xs text-muted-foreground font-normal">ETEC João Belarmino</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-8 space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors w-full",
                          isActive(item.href)
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted hover:text-foreground text-muted-foreground",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </Link>
                    )
                  })}
                  
                  {/* Theme Toggle for Mobile */}
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-sm font-medium">Tema</span>
                    <ThemeToggle />
                  </div>
                </div>

                {/* Mobile Footer */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-center text-xs text-muted-foreground">
                    <p>Desenvolvido pelos alunos</p>
                    <p>Técnico em Desenvolvimento de Sistemas</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
