import type { TickerItem } from "@/lib/types"

function TickerItems({ items }: { items: TickerItem[] }) {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="inline-flex gap-3 items-center">
          {item.emoji}&nbsp;
          {item.em && <em className="text-sun not-italic">{item.em}</em>}
          {item.em ? ` ${item.text}` : item.text}
        </span>
      ))}
    </>
  )
}

export function Ticker({ items }: { items: TickerItem[] }) {
  return (
    <div
      className="overflow-hidden border-t-[3px] border-b-[3px] border-ink py-3.5 bg-ink text-cream"
      aria-hidden="true"
    >
      <div
        className="inline-flex gap-12 pl-12 whitespace-nowrap font-display font-black text-[22px]"
        style={{ animation: "ticker 40s linear infinite" }}
      >
        <TickerItems items={items} />
        <TickerItems items={items} />
      </div>
    </div>
  )
}
