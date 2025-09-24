import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Hub de TCC's",
    template: "%s | Hub de TCC's"
  },
  description: "Portal virtual dos Trabalhos de Conclusão de Curso da ETEC João Belarmino. Explore projetos inovadores desenvolvidos pelos estudantes do curso Técnico em Desenvolvimento de Sistemas.",
  keywords: ["TCC", "ETEC", "João Belarmino", "Desenvolvimento de Sistemas", "Projetos", "Tecnologia", "Educação"],
  authors: [{ name: "ETEC João Belarmino" }],
  creator: "ETEC João Belarmino",
  publisher: "Centro Paula Souza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hubtcc.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://hubtcc.vercel.app',
    title: 'Hub de TCCs - ETEC João Belarmino',
    description: 'Portal virtual dos Trabalhos de Conclusão de Curso da ETEC João Belarmino. Explore projetos inovadores desenvolvidos pelos estudantes.',
    siteName: 'Hub de TCCs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hub de TCCs - ETEC João Belarmino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hub de TCCs - ETEC João Belarmino',
    description: 'Portal virtual dos Trabalhos de Conclusão de Curso da ETEC João Belarmino.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip Links para acessibilidade */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
          >
            Pular para o conteúdo principal
          </a>
          <a 
            href="#main-navigation" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
          >
            Pular para a navegação
          </a>
          
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
