import rss from '@astrojs/rss';
import { getEssays } from '../lib/util';
import { site } from '../data/site';

export async function GET(context) {
  const essays = await getEssays();
  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: essays.map((e) => ({
      title: `№ ${e.data.number} — ${e.data.title}`,
      description: e.data.dek,
      pubDate: e.data.date,
      link: `/writing/${e.id}/`,
    })),
  });
}
