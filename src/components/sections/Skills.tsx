import type { PanelConfig } from "@/lib/types"

/* Parse *word* → <em>word</em> */
function parseHeading(text: string) {
  return text.split(/(\*[^*]+\*)/).map((p, i) =>
    p.startsWith("*")
      ? <em key={i} style={{ fontStyle: "italic", color: "var(--barn)" }}>{p.slice(1, -1)}</em>
      : p
  )
}

function SkillTile({ icon, label, dark }: { icon: string; label: string; dark?: boolean }) {
  return (
    <div
      className="tile-hover flex flex-col items-center text-center font-black text-[14px] rounded-2xl border-[2.5px] border-ink px-2.5 py-3.5 shadow-ink"
      style={{
        background: dark ? "var(--cream)" : "white",
        color: "var(--ink)",
      }}
    >
      <div
        className="w-[54px] h-[54px] mb-2 rounded-xl border-2 border-ink flex items-center justify-center text-[26px]"
        style={{ background: dark ? "var(--sun)" : "var(--sun)" }}
      >
        {icon}
      </div>
      {label}
    </div>
  )
}

function Panel({ config }: { config: PanelConfig }) {
  return (
    <div
      className="rounded-[28px] border-[2.5px] border-ink p-7 relative overflow-hidden shadow-xl"
      style={{
        background: config.dark ? "var(--grass-2, var(--grass2))" : "var(--wool)",
        color:      config.dark ? "var(--cream)" : "var(--ink)",
      }}
    >
      <span
        className="font-[family-name:var(--font-caveat)] text-[26px] inline-block"
        style={{ color: config.dark ? "var(--sun)" : "var(--barn)" }}
      >
        {config.eyebrow}
      </span>
      <h2
        className="font-[family-name:var(--font-fraunces)] font-black text-[48px]"
        style={{ color: config.dark ? "var(--cream)" : "var(--ink)" }}
      >
        {parseHeading(config.heading)}
      </h2>
      <p
        className="text-[17px] max-w-[420px] font-semibold leading-relaxed mb-5"
        style={{ color: config.dark ? "var(--cream)" : "var(--ink)" }}
      >
        {config.subtext}
      </p>
      <div className="grid gap-3.5 grid-cols-2 sm:grid-cols-3">
        {config.items.map(item => (
          <SkillTile key={item.label} icon={item.icon} label={item.label} dark={config.dark} />
        ))}
      </div>
    </div>
  )
}

export function Skills({ panels }: { panels: [PanelConfig, PanelConfig] }) {
  return (
    <section id="skills" className="py-20 px-7 max-w-[1280px] mx-auto">
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
        {panels.map(p => <Panel key={p.heading} config={p} />)}
      </div>
    </section>
  )
}
