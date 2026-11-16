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
    tagline: 'Electrical engineer, maker and amateur of many things.',
    intro:
      'I work in power electronics, build useful tools, and enjoy diving deep into the physics behind things — from converters to spectroscopy, from sourdough to whatever comes next.',
    sections: {
      notes: { title: 'Technical notes', lead: 'Articles, experiments and explanations.' },
      projects: { title: 'Projects', lead: 'Things I have designed and built.' },
      recipes: { title: 'Recipes', lead: 'Personal recipes, tested in my own kitchen.' },
    },
    recent: { projects: 'Projects', notes: 'Latest notes', recipes: 'Recipes' },
    viewAll: 'View all',
    open: 'Open',
    comingSoon: 'Link coming soon',
    maturity: { seedling: 'Seedling', growing: 'Growing', evergreen: 'Evergreen' },
    maturityHelp: 'How finished this note is',
    recipe: { servings: 'Serves', prep: 'Prep', cook: 'Cook', ingredients: 'Ingredients', method: 'Method', print: 'Print recipe' },
    ui: { menu: 'Menu', theme: 'Toggle light / dark', accent: 'Accent colour', language: 'Language', elsewhere: 'Elsewhere' },
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
    tagline: 'Ingegnere elettrico, maker e appassionato di molte cose.',
    intro:
      'Mi occupo di elettronica di potenza, costruisco strumenti utili e mi piace andare a fondo nella fisica delle cose — dai convertitori alla spettroscopia, dal lievito madre a qualunque cosa venga dopo.',
    sections: {
      notes: { title: 'Note tecniche', lead: 'Articoli, esperimenti e spiegazioni.' },
      projects: { title: 'Progetti', lead: 'Cose che ho progettato e costruito.' },
      recipes: { title: 'Ricette', lead: 'Ricette personali, provate nella mia cucina.' },
    },
    recent: { projects: 'Progetti', notes: 'Ultime note', recipes: 'Ricette' },
    viewAll: 'Vedi tutto',
    open: 'Apri',
    comingSoon: 'Link in arrivo',
    maturity: { seedling: 'Germoglio', growing: 'In crescita', evergreen: 'Sempreverde' },
    maturityHelp: 'Quanto è completa questa nota',
    recipe: { servings: 'Porzioni', prep: 'Preparazione', cook: 'Cottura', ingredients: 'Ingredienti', method: 'Procedimento', print: 'Stampa la ricetta' },
    ui: { menu: 'Menu', theme: 'Cambia tema chiaro / scuro', accent: 'Colore d’accento', language: 'Lingua', elsewhere: 'Altrove' },
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
