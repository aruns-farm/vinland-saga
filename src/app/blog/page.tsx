import Link from "next/link"
import { config } from "@/lib/site-config"
import { posts } from "../../../portfolios/arun/blog"
import { Topbar } from "@/components/layout/Topbar"
import { Footer } from "@/components/layout/Footer"
import { TagPill } from "@/components/ui/Tag"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `Writing · ${config.name}`,
  description: "Essays and notes from the farm.",
}

export default function BlogListPage() {
  return (
    <>
      <Topbar config={config} />
      <main className="min-h-screen bg-cream">
        {/* Header */}
        <div className="py-20 px-7 max-w-[860px] mx-auto">
          <span className="font-hand text-[28px] text-grass2 inline-block -rotate-2 mb-2">
            ~ from the desk ~
          </span>
          <h1
            className="font-display font-black text-ink leading-[.9]"
            style={{ fontSize: "clamp(48px,7vw,80px)" }}
          >
            Writing &amp;{" "}
            <em className="italic text-barn">Thinking</em>
          </h1>
          <p className="mt-4 text-[18px] font-semibold text-ink/70 max-w-[540px]">
            Notes on engineering, craft, and the occasional meta-post about whatever this farm is becoming.
          </p>
        </div>

        {/* Post list */}
        <div
          className="border-t-[3px] border-ink"
          style={{ background: "var(--cream)" }}
        >
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block no-underline"
            >
              <article
                className="px-7 py-8 max-w-[860px] mx-auto flex gap-5 sm:gap-8 items-start group"
                style={{
                  borderBottom: i < posts.length - 1 ? "2px dashed color-mix(in oklab, var(--ink) 18%, transparent)" : undefined,
                }}
              >
                {/* Gradient swatch */}
                <div
                  className="flex-shrink-0 w-[56px] h-[56px] sm:w-[80px] sm:h-[80px] rounded-[14px] border-[2px] border-ink shadow-md"
                  style={{
                    background: post.accentGradient,
                  }}
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <TagPill variant="sun">{post.tag}</TagPill>
                    <span className="text-[13px] font-semibold text-ink/50">{post.date} · {post.readTime}</span>
                  </div>
                  <h2
                    className="font-display text-ink text-[26px] font-[800] leading-tight group-hover:text-barn transition-colors"
                  >
                    {post.title}
                  </h2>
                  <p className="mt-1.5 text-[15px] font-semibold text-ink/70 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <span className="flex-shrink-0 font-black text-[20px] text-ink/30 group-hover:text-barn transition-colors self-center">
                  →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </main>
      <Footer config={config} />
    </>
  )
}
