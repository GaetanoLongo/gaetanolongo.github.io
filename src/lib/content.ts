import { getCollection, getEntry } from 'astro:content';
import type { Lang } from '../i18n';
import { other } from '../i18n';

type Named = 'notes' | 'projects' | 'recipes' | 'pages';

/** Entry ids look like "en/some-slug". Split them into lang + slug. */
export const splitId = (id: string) => {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
};

export const inLang = <T extends { id: string }>(items: T[], lang: Lang) =>
  items.filter((e) => splitId(e.id).lang === lang).map((e) => ({ entry: e, slug: splitId(e.id).slug }));

export const hasTranslation = async (name: Named, lang: Lang, slug: string) =>
  Boolean(await getEntry(name, `${other(lang)}/${slug}`));

export const fmtDate = (d: Date, locale: string) =>
  d.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: '2-digit' }).toUpperCase();

export { getCollection };
