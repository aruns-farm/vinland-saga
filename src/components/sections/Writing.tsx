import type { Article } from "@/lib/types"
import { NewsTag } from "@/components/ui/Tag"

function ArticleCard({ article }: { article: Article }) {
  return (
    <article
      className="rounded-[20px] border-[2.5px] border-ink overflow-hidden cursor-pointer"
      style={{ background: "var(--cream)", color: "var(--ink)", boxShadow: "0 6px 0 rgba(0,0,0,.2)" }}
    >
      <div
        className="aspect-video border-b-[2.5px] border-ink flex items-center justify-center"
        style={{ background: article.accentGradient }}
      />
      <div className="p-4">
        <NewsTag>{article.tag}</NewsTag>
        <h3 className="font-[family-name:var(--font-fraunces)] text-[22px] my-2.5">
          {article.title}
        </h3>
        <p
          className="text-[14px] m-0 font-semibold"
          style={{ color: "color-mix(in oklab, var(--ink) 75%, transparent)" }}
        >
          {article.summary}
        </p>
      </div>
    </article>
  )
}

export function Writing({ articles }: { articles: Article[] }) {
  return (
    <div
      id="writing"
      style={{ background: "var(--barn)", color: "white", borderTop: "3px solid var(--ink)", borderBottom: "3px solid var(--ink)" }}
      className="py-16 px-7"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-5">
          <div>
            <span
              className="font-[family-name:var(--font-caveat)] text-[28px] inline-block"
              style={{ color: "var(--sun)" }}
            >
              ~ from the desk ~
            </span>
            <h2
              className="font-[family-name:var(--font-fraunces)] font-black"
              style={{ fontSize: "clamp(40px,5vw,56px)", color: "white" }}
            >
              Writing &amp;{" "}
              <em style={{ fontStyle: "italic", color: "var(--sun)" }}>Thinking</em>
            </h2>
          </div>
          <a
            href="#"
            className="font-black no-underline"
            style={{ color: "white", textDecoration: "underline wavy var(--sun)", textUnderlineOffset: 5 }}
          >
            All posts →
          </a>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {articles.map(a => <ArticleCard key={a.title} article={a} />)}
        </div>
      </div>
    </div>
  )
}
