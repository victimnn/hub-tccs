"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Linkedin, Mail, GraduationCap, User, Award } from "lucide-react"
import type { Advisor } from "@/lib/types"

interface AdvisorPopupProps {
  advisor: Advisor
  children: React.ReactNode
}

export function AdvisorPopup({ advisor, children }: AdvisorPopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Perfil de {advisor.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative">
              <img
                src={advisor.photo || "/placeholder.svg"}
                alt={advisor.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
              />
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                <GraduationCap className="h-4 w-4" />
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <h2 className="text-2xl font-bold">{advisor.name}</h2>
                <p className="text-lg text-primary font-medium">{advisor.title}</p>
                {advisor.department && (
                  <p className="text-sm text-muted-foreground">{advisor.department}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {advisor.linkedin && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                )}

                {advisor.email && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={`mailto:${advisor.email}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          <Separator />

          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Sobre</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{advisor.about}</p>
          </div>

          {/* Expertise Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Área de Especialização</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {advisor.expertise.split(", ").map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Achievements Section (if available) */}
          {advisor.achievements && advisor.achievements.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Conquistas e Experiência</h3>
              <ul className="space-y-2">
                {advisor.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
