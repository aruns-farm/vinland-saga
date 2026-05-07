import Link from "next/link"
import type { Article } from "@/lib/types"
import { TagPill } from "@/components/ui/Tag"

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="block no-underline group">
      <article
        className="card-hover rounded-[20px] border-[2.5px] border-ink overflow-hidden"
        style={{ background: "var(--cream)", boxShadow: "0 6px 0 rgba(0,0,0,.2)" }}
      >
        <div
          className="aspect-video border-b-[2.5px] border-ink"
          style={{ background: article.accentGradient }}
        />
        <div className="p-4">
          <TagPill variant="sun">{article.tag}</TagPill>
          <h3 className="font-display text-[22px] text-ink my-2.5 group-hover:text-barn transition-colors">
            {article.title}
          </h3>
          <p className="text-[14px] m-0 font-semibold text-ink/75">
            {article.summary}
          </p>
        </div>
      </article>
    </Link>
  )
}

export function Writing({ articles }: { articles: Article[] }) {
  return (
    <div
      id="writing"
      className="py-16 px-7 bg-barn text-white"
      style={{ borderTop: "3px solid var(--ink)", borderBottom: "3px solid var(--ink)" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-5">
          <div>
            <span className="font-hand text-[28px] inline-block text-sun">
              ~ from the desk ~
            </span>
            <h2
              className="font-display font-black text-white"
              style={{ fontSize: "clamp(40px,5vw,56px)" }}
            >
              Writing &amp;{" "}
              <em className="italic text-sun">Thinking</em>
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-black no-underline text-white hover:text-sun transition-colors"
          >
            All posts →
          </Link>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {articles.map(a => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </div>
    </div>
  )
}
