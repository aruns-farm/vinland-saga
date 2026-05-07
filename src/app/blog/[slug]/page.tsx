import { notFound } from "next/navigation"
import Link from "next/link"
import { config } from "@/lib/site-config"
import { getPost, getSlugs, posts } from "../../../../portfolios/arun/blog"
import { Topbar }  from "@/components/layout/Topbar"
import { Footer }  from "@/components/layout/Footer"
import { Ticker }  from "@/components/layout/Ticker"
import type { BlogSection, TocEntry } from "@/lib/types"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: `${post.title} · ${config.name}`, description: post.summary }
}

/* ── Inline text with *italic* markers ── */
function parseInline(text: string) {
  return text.split(/(\*[^*]+\*)/).map((p, i) =>
    p.startsWith("*")
      ? <em key={i} className="italic text-barn">{p.slice(1, -1)}</em>
      : p
  )
}

/* ── Content sections ── */
function Section({ s }: { s: BlogSection }) {
  if (s.type === "p-lead") return (
    <p
      className="font-display text-[22px] leading-[1.55] text-ink mb-[22px] mt-0 lead"
      style={{ fontWeight: 500 }}
    >
      {/* Drop cap: float-left, matches design's ::first-letter rule */}
      <span
        className="float-left font-display font-black text-barn pr-[14px]"
        style={{ fontSize: 90, lineHeight: 0.8, paddingTop: 8 }}
        aria-hidden="true"
      >
        {s.text?.charAt(0)}
      </span>
      {s.text?.slice(1)}
    </p>
  )

  if (s.type === "p") return (
    <p className="text-[19px] leading-[1.7] text-ink mb-[22px] mt-0">{s.text}</p>
  )

  if (s.type === "h2") return (
    <h2
      id={s.id}
      className="font-display font-black text-[36px] text-ink relative pt-[22px] mt-14 mb-[18px]"
      style={{ borderTop: "2px dashed color-mix(in oklab, var(--ink) 18%, transparent)" }}
    >
      {/* Number circle — absolute, in the left margin */}
      {s.num != null && (
        <span
          className="font-display font-black text-[16px] text-ink flex items-center justify-center rounded-full bg-sun border-[2.5px] border-ink"
          style={{
            position: "absolute",
            top: 22,
            left: -56,
            width: 38,
            height: 38,
            boxShadow: "0 2px 0 var(--sun-2)",
            fontStyle: "normal",
          }}
        >
          {s.num}
        </span>
      )}
      {parseInline(s.text ?? "")}
    </h2>
  )

  if (s.type === "h3") return (
    <h3 className="font-display font-black text-[24px] text-ink mt-9 mb-3">{s.text}</h3>
  )

  if (s.type === "quote") return (
    <div className="pullquote" aria-label="Pull quote">
      <p className="font-display font-[500] italic text-[26px] leading-[1.35] text-ink m-0">
        {s.text}
      </p>
      {s.cite && (
        <cite className="font-hand text-[22px] not-italic mt-3 block" style={{ color: "var(--ink-soft, #5b5040)" }}>
          {s.cite}
        </cite>
      )}
    </div>
  )

  if (s.type === "callout") return (
    <div
      className="my-9 rounded-[20px] border-[3px] border-dashed border-ink p-6 grid gap-[18px] items-start bg-cream2"
      style={{ gridTemplateColumns: "56px 1fr" }}
    >
      <div
        className="w-14 h-14 rounded-[14px] border-[2.5px] border-ink flex items-center justify-center text-[30px] bg-sun shadow-sun"
      >
        {s.icon}
      </div>
      <div>
        <h4 className="font-hand font-bold text-[24px] text-barn mb-1">{s.title}</h4>
        <p className="text-[17px] leading-[1.55] text-ink m-0">{s.text}</p>
      </div>
    </div>
  )

  if (s.type === "code") return (
    <pre
      className="my-6 p-5 rounded-[14px] border-[2px] border-ink overflow-x-auto text-[14px] font-mono leading-relaxed text-cream bg-ink"
    >
      <code>{s.text}</code>
    </pre>
  )

  if (s.type === "ul") return (
    <ul className="blog-ul">
      {s.items?.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )

  if (s.type === "ol") return (
    <ol className="blog-ol">
      {s.items?.map((item, i) => <li key={i}>{item}</li>)}
    </ol>
  )

  return null
}

/* ── Sidebar cards ── */
function TocCard({ toc }: { toc: TocEntry[] }) {
  return (
    <div className="bg-white border-[2.5px] border-ink rounded-[18px] p-[22px] shadow-md">
      <span className="font-hand text-[19px] text-barn block mb-[-2px]">~ in this story ~</span>
      <h4 className="font-display text-[18px] text-ink mb-[14px]">Contents</h4>
      <ol className="list-none p-0 m-0" style={{ counterReset: "tocnum" }}>
        {toc.map((entry, i) => (
          <li
            key={entry.id}
            className="py-2 grid gap-[10px] text-[14px]"
            style={{
              gridTemplateColumns: "24px 1fr",
              borderTop: i > 0 ? "1px dashed color-mix(in oklab, var(--ink) 18%, transparent)" : undefined,
            }}
          >
            <span className="font-display font-black text-barn text-[14px] text-center">{i + 1}</span>
            <Link
              href={`#${entry.id}`}
              className="text-ink no-underline leading-[1.4] hover:text-barn transition-colors"
            >
              {entry.label}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

function AuthorCard() {
  const initials = config.name.split(" ").map(w => w[0]).join("").slice(0, 2)
  return (
    <div className="border-[2.5px] border-ink rounded-[18px] p-[22px] text-center shadow-md"
      style={{ background: "var(--paper, #fffaec)" }}>
      <div
        className="w-20 h-20 rounded-full border-[3px] border-ink mx-auto mb-3 flex items-center justify-center font-display font-black text-[32px] text-ink bg-sun shadow-sun"
      >
        {initials}
      </div>
      <h4 className="font-display text-[18px] text-ink mb-1">{config.name}</h4>
      <div className="font-hand text-barn text-[18px] mb-3">~ full-stack developer ~</div>
      <p className="text-[14px] leading-[1.5] mb-[14px]" style={{ color: "var(--ink-soft, #5b5040)" }}>{config.bio}</p>
      <a
        href={config.links.github} target="_blank" rel="noreferrer"
        className="inline-block bg-barn text-white border-2 border-ink rounded-full px-4 py-2 font-black text-[14px] no-underline"
        style={{ boxShadow: "0 3px 0 var(--barn-2)" }}
      >
        Read more posts →
      </a>
    </div>
  )
}

function NewsletterCard() {
  return (
    <div className="bg-ink border-[2.5px] border-ink rounded-[18px] p-[22px] shadow-md">
      <span className="font-hand text-[19px] text-sun block mb-[-2px]">~ The Hilltop Post ~</span>
      <h4 className="font-display text-[18px] text-cream mb-2">Field Notes, monthly.</h4>
      <p className="text-[13px] leading-[1.5] mb-[14px]" style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}>
        Engineering notes, small-tool discoveries, and the occasional meta-post. One email a month, no spam.
      </p>
      <input
        type="email" placeholder="you@farmhouse.dev"
        className="w-full px-4 py-[10px] rounded-full border-2 font-semibold text-[14px] text-cream mb-2 outline-none"
        style={{ background: "transparent", borderColor: "var(--cream)" }}
      />
      <button
        className="w-full py-[10px] rounded-full bg-sun text-ink border-2 border-ink font-black text-[14px] cursor-pointer shadow-sun"
      >
        Join the flock
      </button>
    </div>
  )
}

/* ── More post card ── */
function MoreCard({ post }: { post: (typeof posts)[0] }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block no-underline">
      <article
        className="more-card-hover rounded-[18px] border-[2.5px] border-ink overflow-hidden text-ink bg-white"
        style={{ boxShadow: "0 5px 0 var(--wool-shadow)" }}
      >
        <div className="h-[160px] relative border-b-[2.5px] border-ink"
          style={{ background: post.accentGradient }}>
          <span className="absolute top-3 left-3 bg-ink text-cream text-[10px] font-black uppercase tracking-[.15em] px-[10px] py-1 rounded-full">
            {post.tag}
          </span>
        </div>
        <div className="p-4 pb-5">
          <h3 className="font-display text-[19px] font-[800] leading-tight mb-2 group-hover:text-barn transition-colors">
            {post.title}
          </h3>
          <div className="font-hand text-[16px] flex items-center gap-1.5" style={{ color: "var(--ink-soft, #5b5040)" }}>
            ~ {post.date} · {post.readTime} ~
          </div>
        </div>
      </article>
    </Link>
  )
}

/* ── Page ── */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const morePosts = posts.filter(p => p.slug !== slug).slice(0, 3)
  const initials  = config.name.split(" ").map(w => w[0]).join("").slice(0, 2)

  return (
    <>
      <Topbar config={config} />
      <main className="min-h-screen bg-cream">

        {/* ── Post header ── */}
        <header
          className="text-center"
          style={{ maxWidth: 880, margin: "0 auto", padding: "60px 28px 40px" }}
        >
          {/* Breadcrumbs — Caveat font, wavy links */}
          <div className="font-hand text-[22px] mb-[22px] inline-flex items-center gap-[10px]"
            style={{ color: "var(--ink-soft, #5b5040)" }}>
            <Link href="/blog" className="text-ink underline decoration-wavy decoration-barn underline-offset-[4px]">
              Writing
            </Link>
            <span className="text-barn">→</span>
            <Link href="/blog" className="text-ink underline decoration-wavy decoration-barn underline-offset-[4px]">
              {post.tag}
            </Link>
            <span className="text-barn">→</span>
            <span>This story</span>
          </div>

          {/* Category badge */}
          <div className="mb-[18px]">
            <span
              className="inline-block bg-barn text-white font-black text-[12px] tracking-[.15em] uppercase px-[14px] py-1.5 rounded-full border-2 border-ink"
              style={{ boxShadow: "0 2px 0 var(--barn-2)", transform: "rotate(-1.5deg)" }}
            >
              {post.tag}
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-display font-black text-ink mb-[22px]"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            {parseInline(post.title)}
          </h1>

          {/* Dek */}
          <p className="text-[22px] leading-[1.5] max-w-[680px] mx-auto"
            style={{ color: "var(--ink-soft, #5b5040)" }}>
            {post.summary}
          </p>

          {/* Byline pill */}
          <div
            className="mt-9 inline-flex items-center gap-[14px] bg-white border-[2.5px] border-ink rounded-full shadow-sm"
            style={{ padding: "8px 20px 8px 8px" }}
          >
            <div
              className="w-11 h-11 rounded-full bg-sun border-2 border-ink flex items-center justify-center font-display font-black text-[20px] text-ink flex-shrink-0"
            >
              {initials}
            </div>
            <div className="text-left leading-snug">
              <strong className="block text-[14px] font-black text-ink">{config.name}</strong>
              <span className="font-hand text-[16px] block mt-0.5" style={{ color: "var(--ink-soft, #5b5040)" }}>
                {config.handle}
              </span>
            </div>
            <div
              className="flex gap-[10px] items-center text-[13px] pl-[14px] ml-1"
              style={{
                borderLeft: "2px dashed color-mix(in oklab, var(--ink) 18%, transparent)",
                color: "var(--ink-soft, #5b5040)",
              }}
            >
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-current"/>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* ── Hero illustration card ── */}
        <div style={{ maxWidth: 1100, margin: "32px auto 60px", padding: "0 28px" }}>
          <div
            className="relative rounded-[24px] border-[3px] border-ink overflow-hidden"
            style={{
              height: 360,
              background: `linear-gradient(180deg, var(--sky) 0 55%, var(--grass) 55% 100%)`,
              boxShadow: "0 6px 0 var(--wool-shadow), 0 12px 24px rgba(0,0,0,.08)",
            }}
            aria-hidden="true"
          >
            {/* Cloud art 1 */}
            <div className="absolute rounded-[999px] bg-white"
              style={{ top: 60, left: 80, width: 130, height: 36, boxShadow: "inset -4px -6px 0 rgba(0,0,0,.05)" }}>
              <div className="absolute rounded-full bg-white" style={{ width: 60, height: 60, top: -28, left: 22 }}/>
              <div className="absolute rounded-full bg-white" style={{ width: 44, height: 44, top: -22, left: 70 }}/>
            </div>
            {/* Cloud art 2 */}
            <div className="absolute rounded-[999px] bg-white"
              style={{ top: 32, left: 320, width: 100, height: 28, boxShadow: "inset -4px -6px 0 rgba(0,0,0,.05)" }}>
              <div className="absolute rounded-full bg-white" style={{ width: 44, height: 44, top: -22, left: 16 }}/>
              <div className="absolute rounded-full bg-white" style={{ width: 36, height: 36, top: -18, left: 56 }}/>
            </div>
            {/* Sun */}
            <div className="absolute rounded-full"
              style={{
                top: 32, right: 80,
                width: 90, height: 90,
                background: "var(--sun)",
                boxShadow: "0 0 0 10px color-mix(in oklab, var(--sun) 40%, transparent), 0 0 0 22px color-mix(in oklab, var(--sun) 20%, transparent)",
              }}
            />
            {/* Field line */}
            <div className="absolute left-0 right-0 h-2"
              style={{
                bottom: 80, opacity: 0.4,
                background: "repeating-linear-gradient(to right, var(--grass-2) 0 16px, transparent 16px 28px)",
              }}
            />
            {/* Center sheep */}
            <svg
              className="absolute"
              style={{ left: "50%", transform: "translateX(-50%)", bottom: 30 }}
              width="160" height="160" viewBox="0 0 100 100"
            >
              <ellipse cx="50" cy="60" rx="30" ry="20" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
              <circle cx="28" cy="52" r="9" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
              <circle cx="38" cy="42" r="9" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
              <circle cx="55" cy="38" r="10" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
              <circle cx="72" cy="44" r="9" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
              <ellipse cx="52" cy="66" rx="14" ry="13" fill="#3a3024" stroke="#2a2418" strokeWidth="2.5"/>
              <circle cx="47" cy="65" r="2" fill="#fbf3df"/>
              <circle cx="57" cy="65" r="2" fill="#fbf3df"/>
            </svg>
          </div>
          <p className="mt-[14px] font-hand text-center text-[20px]" style={{ color: "var(--ink-soft, #5b5040)" }}>
            ~ from the desk of {config.name.split(" ")[0]} ~
          </p>
        </div>

        {/* ── Body + sidebar ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_280px]"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 28px 80px",
            gap: 56,
            alignItems: "start",
          }}
        >
          {/* Article body — padding-left creates margin for absolute .num circles */}
          <article
            className="text-ink max-w-[720px]"
            style={{ fontSize: 19, lineHeight: 1.7, paddingLeft: "clamp(0px, 4vw, 56px)", position: "relative" }}
          >
            {post.content.map((s, i) => <Section key={i} s={s} />)}

            {/* Post footer: tags + share */}
            <div
              className="mt-14 pt-7 grid gap-7 items-center"
              style={{
                borderTop: "2px dashed color-mix(in oklab, var(--ink) 18%, transparent)",
                gridTemplateColumns: "1fr auto",
              }}
            >
              <div className="flex gap-2 flex-wrap">
                {post.toc.map(t => (
                  <Link
                    key={t.id}
                    href={`#${t.id}`}
                    className="bg-white border-2 border-ink rounded-full px-[14px] py-1.5 text-[13px] font-bold text-ink no-underline hover:bg-sun transition-colors shadow-xs"
                  >
                    #{t.id}
                  </Link>
                ))}
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-hand text-[19px] mr-1.5" style={{ color: "var(--ink-soft, #5b5040)" }}>Share →</span>
                {["⎘", "✉", "𝕏", "📌"].map(icon => (
                  <button
                    key={icon}
                    className="w-10 h-10 border-[2.5px] border-ink rounded-full bg-white font-black text-[16px] cursor-pointer hover:bg-sun hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="flex flex-col gap-[22px] lg:sticky lg:top-[90px]">
            <TocCard toc={post.toc} />
            <AuthorCard />
            <NewsletterCard />
          </aside>
        </div>

        {/* ── More posts ── */}
        {morePosts.length > 0 && (
          <section
            className="py-20 px-7"
            style={{ background: "var(--cream-2)", borderTop: "3px solid var(--ink)", borderBottom: "3px solid var(--ink)" }}
          >
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <div className="flex justify-between items-end mb-9 flex-wrap gap-4">
                <div>
                  <span className="font-hand text-[26px] text-barn block">~ keep reading ~</span>
                  <h2 className="font-display font-black text-ink" style={{ fontSize: 44 }}>
                    More <em className="italic text-barn">Writing</em>
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="bg-white border-2 border-ink rounded-full px-[18px] py-2 font-black text-[14px] text-ink no-underline hover:bg-cream2 transition-colors shadow-sm"
                >
                  All stories →
                </Link>
              </div>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {morePosts.map(p => <MoreCard key={p.slug} post={p} />)}
              </div>
            </div>
          </section>
        )}
      </main>

      <Ticker items={config.ticker} />
      <Footer config={config} />
    </>
  )
}
