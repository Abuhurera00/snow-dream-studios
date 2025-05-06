import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import CursorBox from "@/components/CursorBox"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Snow Dream Studios",
  description: "Digitale Strategien entwickeln, die Markenträume in Realität verwandeln.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CursorBox />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
