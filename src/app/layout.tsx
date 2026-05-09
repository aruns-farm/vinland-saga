import type { Metadata } from "next"
import { Fraunces, Nunito, Caveat } from "next/font/google"
import "./globals.css"
import { UnderConstruction } from "@/components/layout/UnderConstruction"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ketils.farm"),
  title: "Ketil's Farm",
  description: "A portfolio for every character.",
  openGraph: {
    title: "Ketil's Farm",
    description: "A portfolio for every character.",
    url: "https://ketils.farm",
    siteName: "Ketil's Farm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketil's Farm",
    description: "A portfolio for every character.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable} ${caveat.variable}`}>
      <body>
        <UnderConstruction />
        {children}
      </body>
    </html>
  )
}
