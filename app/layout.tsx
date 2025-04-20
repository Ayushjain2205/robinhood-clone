import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Merriweather } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
})

export const metadata = {
  title: "Robinhood: 24/5 Commission-Free Stock Trading",
  description: "Analyze, buy, and sell with tools purpose-built for how you trade.",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans`}>{children}</body>
    </html>
  )
}
