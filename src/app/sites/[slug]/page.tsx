import { notFound } from "next/navigation"
import { getPortfolio, getSlugs } from "@/lib/portfolios"
import { Topbar }   from "@/components/layout/Topbar"
import { Footer }   from "@/components/layout/Footer"
import { Ticker }   from "@/components/layout/Ticker"
import { Hero }     from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Work }     from "@/components/sections/Work"
import { Skills }   from "@/components/sections/Skills"
import { Writing }  from "@/components/sections/Writing"
import { Contact }  from "@/components/sections/Contact"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const config = await getPortfolio(slug)
  if (!config) return {}
  return {
    title: `${config.name} · ${config.handle}`,
    description: config.bio,
  }
}

export default async function PortfolioPage({ params }: Props) {
  const { slug } = await params
  const config = await getPortfolio(slug)
  if (!config) notFound()

  return (
    <>
      <Topbar config={config} />
      <main>
        <Hero config={config.hero} name={config.name} />
        <Ticker items={config.ticker} />
        <Projects projects={config.projects} />
        <Work entries={config.work} />
        <Skills panels={config.panels} />
        <Writing articles={config.writing} />
        <Contact config={config} />
      </main>
      <Footer config={config} />
    </>
  )
}
