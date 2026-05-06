import type { PortfolioConfig } from "./types"

/* Registry: subdomain → config loader */
const registry: Record<string, () => Promise<{ config: PortfolioConfig }>> = {
  arun:     () => import("../../portfolios/arun/config"),
  // thorfinn: () => import("../../portfolios/thorfinn/config"),
  // ketil:    () => import("../../portfolios/ketil/config"),
  // hirosh:   () => import("../../portfolios/hirosh/config"),
}

export async function getPortfolio(slug: string): Promise<PortfolioConfig | null> {
  const loader = registry[slug]
  if (!loader) return null
  const mod = await loader()
  return mod.config
}

export function getSlugs(): string[] {
  return Object.keys(registry)
}
