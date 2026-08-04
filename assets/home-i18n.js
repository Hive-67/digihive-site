/* ════════════════════════════════════════════════════════════════════════════════
   DIGIHIVE.COM — ACCUEIL — i18n (FR/EN/ES) + mode sombre
   Scope : index.html uniquement. Le FR est déjà présent en dur dans le
   HTML et dans data.js — ce fichier ne fournit que les overrides EN/ES
   et la logique de bascule (langue persistée + thème persisté).
════════════════════════════════════════════════════════════════════════════════════ */

const HOME_I18N = {
  en: {
    nav: {
      accueil: 'Home', catalogue: 'Catalogue', templates: 'Discord Templates',
      logiciels: 'Software', formations: 'Courses', services: 'Services',
      compte: 'Account', suffix: ' · coming soon'
    },
    hero: {
      title: 'Digital products, ready to use, delivered turnkey.',
      text: 'Discord templates, custom software, courses and services: every DigiHive product is designed to save you time — documented and ready to use from the moment you buy it.',
      ctaPrimary: 'Browse the catalogue',
      ctaGhost: 'Explore the software'
    },
    catSection: {
      eyebrow: 'Categories', title: 'One ecosystem, several worlds',
      text: 'Each category works differently, but everything is managed in the same place.'
    },
    featSection: { eyebrow: 'Selection', title: 'Featured products' },
    categories: {
      logiciel: { nom: 'Software', accroche: 'Your own software, without software prices.' },
      template: { nom: 'Discord Templates', accroche: 'Your Discord server, ready in one command.' },
      formation: { nom: 'Courses', accroche: 'Learn to do yourself what others charge for.' },
      service: { nom: 'Custom Services', accroche: 'Your project, designed and delivered by someone who knows the craft.' }
    },
    products: {
      'pack-initial-gaming': { titre: 'Initial Gaming Pack', desc: 'Full Discord architecture: 16 categories, 75 channels, roles and permissions pre-calibrated.' },
      'formation-bots-discord': { titre: 'Discord Bots Course', desc: 'A complete course to build and configure your own Discord bots, Scriptbe agent included.' },
      'exemple-suivi-budget': { titre: 'Budget Tracker', desc: 'Example — personal budget tracking software, customizable on request.' }
    },
    misc: { exemple: 'Example', inclus: 'Included', agent: 'AI Agents' }
  },
  es: {
    nav: {
      accueil: 'Inicio', catalogue: 'Catálogo', templates: 'Plantillas Discord',
      logiciels: 'Software', formations: 'Formaciones', services: 'Servicios',
      compte: 'Cuenta', suffix: ' · próximamente'
    },
    hero: {
      title: 'Productos digitales listos para usar, entregados llave en mano.',
      text: 'Plantillas de Discord, software a medida, formaciones y servicios: cada producto DigiHive está pensado para ahorrarte tiempo, documentado y listo para usar desde la compra.',
      ctaPrimary: 'Ver el catálogo',
      ctaGhost: 'Descubrir el software'
    },
    catSection: {
      eyebrow: 'Categorías', title: 'Un ecosistema, varios universos',
      text: 'Cada categoría funciona a su manera, pero todo se gestiona en el mismo lugar.'
    },
    featSection: { eyebrow: 'Selección', title: 'Productos destacados' },
    categories: {
      logiciel: { nom: 'Software', accroche: 'Tu software, sin precios de software.' },
      template: { nom: 'Plantillas Discord', accroche: 'Tu servidor Discord, listo en un comando.' },
      formation: { nom: 'Formaciones', accroche: 'Aprende a hacer tú mismo lo que otros cobran.' },
      service: { nom: 'Servicios a Medida', accroche: 'Tu proyecto, pensado y entregado por alguien que entiende del tema.' }
    },
    products: {
      'pack-initial-gaming': { titre: 'Pack Inicial Gaming', desc: 'Arquitectura Discord completa: 16 categorías, 75 canales, roles y permisos precalibrados.' },
      'formation-bots-discord': { titre: 'Formación Bots Discord', desc: 'Formación completa para crear y configurar tus propios bots de Discord, agente Scriptbe incluido.' },
      'exemple-suivi-budget': { titre: 'Control de Presupuesto', desc: 'Ejemplo — software de control de presupuesto personal, personalizable a petición.' }
    },
    misc: { exemple: 'Ejemplo', inclus: 'Incluido', agent: 'Agentes IA' }
  }
};

const LANG_KEY = 'digihive-lang';
const THEME_KEY = 'digihive-theme';

function fmtPriceHome(p){
  if (p === null || p === undefined) return '';
  if (typeof p === 'string') return p + ' €';
  return (Number.isInteger(p) ? p : p.toFixed(2)) + ' €';
}

function getTranslation(lang, path){
  if (lang === 'fr') return undefined;
  const dict = HOME_I18N[lang];
  if (!dict) return undefined;
  return path.split('.').reduce((node, key) => (node ? node[key] : undefined), dict);
}

function typeLabelsFor(lang){
  if (lang === 'fr') return FILTER_LABELS;
  const c = HOME_I18N[lang].categories;
  return {
    template: c.template.nom, logiciel: c.logiciel.nom,
    formation: c.formation.nom, service: c.service.nom,
    agent: HOME_I18N[lang].misc.agent
  };
}

function productCardHomeHTML(p, lang){
  const tr = lang !== 'fr' ? HOME_I18N[lang].products[p.id] : null;
  const titre = tr ? tr.titre : p.titre;
  const desc = tr ? tr.desc : p.description_courte;
  const labels = lang === 'fr'
    ? { exemple: 'Exemple', inclus: 'Inclus' }
    : { exemple: HOME_I18N[lang].misc.exemple, inclus: HOME_I18N[lang].misc.inclus };

  const priceBlock = p.statut === 'exemple'
    ? `<span class="badge-exemple">${labels.exemple}</span>`
    : p.statut === 'inclus_avec'
      ? `<span class="badge-exemple">${labels.inclus}</span>`
      : `<span class="prod-price">${fmtPriceHome(p.prix)}</span>`;

  const typeLabels = typeLabelsFor(lang);

  return `
    <a class="prod-card" href="produit.html?id=${encodeURIComponent(p.id)}">
      <span class="prod-tag">${typeLabels[p.type] || p.type}</span>
      <h3>${titre}</h3>
      <p>${desc}</p>
      <div class="prod-foot">${priceBlock}</div>
    </a>`;
}

function renderHomeCategoriesI18n(lang){
  const el = document.getElementById('home-categories');
  if (!el) return;
  const order = ['logiciel', 'template', 'formation', 'service'];
  el.innerHTML = order.map(type => {
    const cat = CATEGORIES.find(c => c.type === type);
    const tr = lang !== 'fr' ? HOME_I18N[lang].categories[type] : null;
    const label = tr ? tr.nom : (cat ? cat.nom : type);
    const line = tr ? tr.accroche : (cat ? cat.accroche : '');
    return `
      <a class="cat-card" href="categorie.html?type=${type}">
        <span class="hex">⬡</span>
        <h3>${label}</h3>
        <p>${line}</p>
      </a>`;
  }).join('');
}

function renderHomeFeaturedI18n(lang){
  const el = document.getElementById('home-featured');
  if (!el) return;
  const featured = PRODUCTS.filter(p => p.featured);
  el.innerHTML = featured.length
    ? featured.map(p => productCardHomeHTML(p, lang)).join('')
    : `<p class="empty-state"></p>`;
}

function applyLanguage(lang){
  document.body.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem(LANG_KEY, lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getTranslation(lang, el.getAttribute('data-i18n'));
    if (val !== undefined) el.textContent = val;
  });

  const compteLink = document.querySelector('.nav-disabled');
  if (compteLink){
    const suffix = lang === 'fr' ? ' · bientôt' : HOME_I18N[lang].nav.suffix;
    compteLink.setAttribute('data-suffix', suffix);
  }

  renderHomeCategoriesI18n(lang);
  renderHomeFeaturedI18n(lang);

  document.querySelectorAll('.lang-switch button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

function applyTheme(theme){
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem(LANG_KEY) || 'fr';
  const savedTheme = localStorage.getItem(THEME_KEY)
    || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  applyLanguage(savedLang);
  applyTheme(savedTheme);

  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn){
    themeBtn.addEventListener('click', () => {
      const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
});
