import { getCollection } from 'astro:content';
import rawBooks from '../data/books.json';

export const fmtDate = (d?: Date) =>
  d ? d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '';

/** Published essays, newest number first. */
export async function getEssays() {
  const all = await getCollection('essays', ({ data }) => !data.draft);
  return all.sort((a, b) => Number(b.data.number) - Number(a.data.number));
}

/** Papers, newest year first. A paper "has notes" when its Markdown body isn't empty. */
export async function getPapers() {
  const all = await getCollection('papers');
  return all
    .map((p) => ({ ...p, hasNotes: Boolean(p.body && p.body.trim().length) }))
    .sort((a, b) => b.data.year - a.data.year);
}

export const mediaLabel = { video: '▶ with video', image: '◧ with figures', none: '' } as const;

/** "03:48" → 228 */
export const toSeconds = (t: string) => t.split(':').reduce((acc, n) => acc * 60 + Number(n), 0);

/** Books in JSON order, each with a library call number like "SYS 03". */
export async function getBooks() {
  // The JSON loader doesn't keep file order, so restore it: the order in books.json is the shelf order.
  const order = new Map(rawBooks.map((b, i) => [b.id, i]));
  const all = (await getCollection('books')).map((b) => b.data).sort((a, b) => order.get(a.id)! - order.get(b.id)!);
  const seen: Record<string, number> = {};
  return all.map((b) => {
    seen[b.shelf] = (seen[b.shelf] ?? 0) + 1;
    return { ...b, call: `${b.shelf} ${String(seen[b.shelf]).padStart(2, '0')}` };
  });
}
