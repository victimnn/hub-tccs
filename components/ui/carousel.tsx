"use client"

import { useState, useEffect, useRef, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  children: ReactNode[]
  className?: string
  itemsPerView?: {
    mobile: number
    tablet: number
    desktop: number
  }
  showArrows?: boolean
  showDots?: boolean
  autoplay?: boolean
  autoplayInterval?: number
  gap?: number
}

export function Carousel({
  children,
  className,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  showArrows = true,
  showDots = true,
  autoplay = false,
  autoplayInterval = 5000,
  gap = 32,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(itemsPerView.desktop)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const totalItems = children.length
  const totalSlides = Math.max(1, Math.ceil(totalItems / itemsPerSlide))

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(itemsPerView.mobile)
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(itemsPerView.tablet)
      } else {
        setItemsPerSlide(itemsPerView.desktop)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [itemsPerView])

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && !isHovered && totalSlides > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides)
      }, autoplayInterval)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoplay, autoplayInterval, isHovered, totalSlides])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  if (totalItems === 0) {
    return null
  }

  // Se não há slides suficientes para navegação, mostrar apenas os primeiros itens
  if (totalSlides <= 1) {
    const itemsToShow = Math.min(itemsPerSlide, totalItems)
    return (
      <div className={cn("relative w-full", className)}>
        <div 
          className="flex"
          style={{ gap: `${gap}px` }}
        >
          {children.slice(0, itemsToShow).map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `calc(${100 / itemsToShow}% - ${gap * (itemsToShow - 1) / itemsToShow}px)`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div 
      className={cn("relative w-full", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            gap: `${gap}px`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="flex-shrink-0 w-full"
              style={{
                width: `calc(${100 / totalSlides}% - ${gap * (totalSlides - 1) / totalSlides}px)`,
              }}
            >
              <div 
                className="flex"
                style={{ gap: `${gap}px` }}
              >
                {children
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map((child, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0"
                      style={{
                        width: `calc(${100 / itemsPerSlide}% - ${gap * (itemsPerSlide - 1) / itemsPerSlide}px)`,
                      }}
                    >
                      {child}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
            onClick={goToPrevious}
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
            onClick={goToNext}
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && totalSlides > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
