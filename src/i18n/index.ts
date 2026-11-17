export const languages = ['en', 'it'] as const;
export type Lang = (typeof languages)[number];
export const other = (l: Lang): Lang => (l === 'en' ? 'it' : 'en');

export const ui = {
  en: {
    locale: 'en-GB',
    htmlLang: 'en',
    role: 'Electrical engineer',
    nav: { home: 'Home', notes: 'Technical notes', projects: 'Projects', recipes: 'Recipes', cv: 'CV', about: 'About', contact: 'Contact' },
    greeting: "Hi, I’m Gaetano",
    tagline: 'I work in power electronics',
    intro:
      'for the rest, I like to travel, go to concerts, cook, knead dough, tend the little vegetable garden, drink good wine…',
    sections: {
      notes: { title: 'Technical notes', lead: 'Notes and assorted write-ups, each with a maturity level for the document' },
      projects: { title: 'Projects', lead: 'A few things that might come in handy' },
      recipes: { title: 'Recipes', lead: 'A collection of recipes: one can’t live on silicon alone' },
    },
    recent: { projects: 'Projects', notes: 'Latest notes', recipes: 'Recipes' },
    viewAll: 'View all',
    open: 'Open',
    comingSoon: 'Link coming soon',
    maturity: { seedling: 'Seedling', growing: 'Growing', evergreen: 'Evergreen' },
    maturityHelp: 'How finished this note is',
    recipe: { servings: 'Serves', prep: 'Prep', cook: 'Cook', ingredients: 'Ingredients', method: 'Method', oven: 'Oven', source: 'Source', versions: 'Versions', versionOf: 'Version of', print: 'Print recipe' },
    ui: { menu: 'Menu', theme: 'Toggle light / dark', accent: 'Accent colour', language: 'Language', elsewhere: 'Elsewhere' },
    onlyLang: { label: 'Italian only', text: 'These notes are written in Italian, and so are their files. There is no English version.' },
    docs: {
      title: 'Documents',
      download: 'Download',
      open: 'Open in Drive',
      show: 'Show preview',
      hide: 'Hide preview',
      privacy: 'Showing the preview loads it from Google Drive.',
      soon: 'The files for this note are not online yet.',
    },
    empty: 'Nothing here yet.',
    notFound: 'Page not found',
    backHome: 'Back to the home page',
  },
  it: {
    locale: 'it-IT',
    htmlLang: 'it',
    role: 'Ingegnere elettrico',
    nav: { home: 'Home', notes: 'Note tecniche', projects: 'Progetti', recipes: 'Ricette', cv: 'CV', about: 'Chi sono', contact: 'Contatti' },
    greeting: 'Ciao, sono Gaetano',
    tagline: 'Lavoro nell’elettronica di potenza',
    intro:
      'per il resto mi piace viaggiare, andare ai concerti, cucinare, impastare, curare l’orticello, bere del buon vino…',
    sections: {
      notes: { title: 'Note tecniche', lead: 'Qui trovi appunti e note varie, con il grado di maturità del documento' },
      projects: { title: 'Progetti', lead: 'Alcune cose che possono tornare utili' },
      recipes: { title: 'Ricette', lead: 'Raccolta di ricette: non si campa solo di silicio' },
    },
    recent: { projects: 'Progetti', notes: 'Ultime note', recipes: 'Ricette' },
    viewAll: 'Vedi tutto',
    open: 'Apri',
    comingSoon: 'Link in arrivo',
    maturity: { seedling: 'Germoglio', growing: 'In crescita', evergreen: 'Sempreverde' },
    maturityHelp: 'Quanto è completa questa nota',
    recipe: { servings: 'Porzioni', prep: 'Preparazione', cook: 'Cottura', ingredients: 'Ingredienti', method: 'Procedimento', oven: 'Forno', source: 'Fonte', versions: 'Versioni', versionOf: 'Versione di', print: 'Stampa la ricetta' },
    ui: { menu: 'Menu', theme: 'Cambia tema chiaro / scuro', accent: 'Colore d’accento', language: 'Lingua', elsewhere: 'Altrove' },
    onlyLang: { label: 'Solo italiano', text: 'Questi appunti sono scritti in italiano.' },
    docs: {
      title: 'Documenti',
      download: 'Scarica',
      open: 'Apri su Drive',
      show: 'Mostra anteprima',
      hide: 'Nascondi anteprima',
      privacy: "Mostrando l'anteprima il documento viene caricato da Google Drive.",
      soon: 'I file di questa nota non sono ancora online.',
    },
    empty: 'Ancora niente qui.',
    notFound: 'Pagina non trovata',
    backHome: 'Torna alla home',
  },
} as const;

export const accents = [
  { id: 'oxide', label: 'Oxide' },
  { id: 'ink', label: 'Ink' },
  { id: 'verdigris', label: 'Verdigris' },
  { id: 'ochre', label: 'Ochre' },
] as const;
