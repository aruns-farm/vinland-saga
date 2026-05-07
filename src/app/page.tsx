import { config } from "@/lib/site-config"
import { Topbar }        from "@/components/layout/Topbar"
import { Footer }        from "@/components/layout/Footer"
import { Ticker }        from "@/components/layout/Ticker"
import { Hero }          from "@/components/sections/Hero"
import { Projects }      from "@/components/sections/Projects"
import { Work }          from "@/components/sections/Work"
import { Skills }        from "@/components/sections/Skills"
import { WatchSection }  from "@/components/sections/WatchSection"
import { Writing }       from "@/components/sections/Writing"
import { Contact }       from "@/components/sections/Contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `${config.name} · ${config.handle}`,
  description: config.bio,
}

export default function Home() {
  return (
    <>
      <Topbar config={config} />
      <main>
        <Hero config={config.hero} name={config.name} />
        <Ticker items={config.ticker} />
        <Projects projects={config.projects} />
        <WatchSection talks={config.talks} />
        <Work entries={config.work} />
        <Skills panels={config.panels} />
        <Writing articles={config.writing} />
        <Contact config={config} />
      </main>
      <Footer config={config} />
    </>
  )
}
