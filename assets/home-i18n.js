/* ════════════════════════════════════════════════════════════════════════════════
   DIGIHIVE.COM — ACCUEIL — i18n (FR/EN/ES) + mode sombre
   Scope : index.html uniquement. Le FR est déjà présent en dur dans le
   HTML et dans data.js — ce fichier ne fournit que les overrides EN/ES
   et la logique de bascule (langue persistée + thème persisté).
════════════════════════════════════════════════════════════════════════════════════ */

const HOME_I18N = {
  en: {
    nav: {
      accueil: 'Home', catalogue: 'Catalogue', devis: 'Quote', contact: 'Contact',
      rejoindre: 'Join us', compte: 'Account', suffix: ' · coming soon'
    },
    hero: {
      title: 'Custom-made digital tools shouldn’t be a luxury.',
      text: 'Software, servers, systems. You bring the idea, we handle the technical side. Ready to use, endlessly evolvable, and fairly priced.',
      ctaPrimary: 'Discover the concept',
      ctaGhost: 'Browse the catalogue'
    },
    concept: {
      eyebrow: 'The concept',
      title: 'A solid base that grows with you',
      text: 'Why pay for a bloated all-in-one when you’ll only use 10% of it? Start from an ultra-accessible base tool (from €5) that does exactly what you need today. Your project grows? Ask for an addition or a tweak. We handle it for a small fee (e.g. €1/request).'
    },
    audience: {
      eyebrow: 'Who it’s for',
      title: 'Who this is for',
      beginners: {
        sub: 'Zero code, zero stress',
        title: 'Beginners',
        text: 'You have an idea but the technical side is blocking you. We define the need together with a quick brief, and deliver a turnkey tool. You use it, we handle the mechanics.'
      },
      tinkerers: {
        sub: 'A clean base',
        title: 'Tinkerers',
        text: 'Save 50 hours of setup. Get sound, structured, documented foundations for your projects. Tinker with the code yourself, or let us handle the complex requests for you.'
      },
      pros: {
        sub: 'ROI and process',
        title: 'Professionals',
        text: 'Tools that adapt to your operational and logistics flows, without an agency budget. A reliable, repeatable solution that simplifies your team’s day-to-day work.'
      }
    },
    method: {
      eyebrow: 'The method',
      title: 'A simple process, in 3 steps',
      step1: { title: 'Scoping', text: 'A quick exchange to define the exact structure of the tool.' },
      step2: { title: 'Delivery', text: 'You receive the working base. You take control right away.' },
      step3: { title: 'Iteration', text: 'You test it in real conditions. Spotted an improvement? Ask for the evolution, we roll it in right away.' }
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
      accueil: 'Inicio', catalogue: 'Catálogo', devis: 'Presupuesto', contact: 'Contacto',
      rejoindre: 'Únete', compte: 'Cuenta', suffix: ' · próximamente'
    },
    hero: {
      title: 'La tecnología a medida no debería ser un lujo.',
      text: 'Software, servidores, sistemas. Tú tienes la idea, nosotros nos encargamos de la técnica. Listo para usar, evolutivo al infinito y a precio justo.',
      ctaPrimary: 'Descubrir el concepto',
      ctaGhost: 'Ver el catálogo'
    },
    concept: {
      eyebrow: 'El concepto',
      title: 'Una base sólida que crece contigo',
      text: '¿Por qué pagar una herramienta gigante si solo vas a usar el 10% de sus funciones? Parte de una herramienta base ultra accesible (desde 5 €) que hace exactamente lo que necesitas hoy. ¿Tu proyecto crece? Pídenos una mejora o un ajuste. Nos encargamos por una aportación mínima (ej.: 1 €/solicitud).'
    },
    audience: {
      eyebrow: '¿Para quién?',
      title: '¿A quién va dirigido?',
      beginners: {
        sub: 'Cero código, cero estrés',
        title: 'Principiantes',
        text: 'Tienes una idea pero la parte técnica te bloquea. Definimos la necesidad juntos con un briefing rápido, y te entregamos una herramienta llave en mano. Tú la usas, nosotros nos ocupamos de la mecánica.'
      },
      tinkerers: {
        sub: 'La base limpia',
        title: 'Manitas',
        text: 'Ahorra 50 horas de configuración. Recibe bases sólidas, estructuradas y documentadas para tus proyectos. Diviértete modificando el código, o déjanos gestionar las solicitudes complejas por ti.'
      },
      pros: {
        sub: 'ROI y proceso',
        title: 'Profesionales',
        text: 'Herramientas que se adaptan a tus flujos operativos y logísticos, sin el presupuesto de una agencia. Una solución fiable y repetible que simplifica el trabajo diario de tu equipo.'
      }
    },
    method: {
      eyebrow: 'El método',
      title: 'Un proceso simple, en 3 pasos',
      step1: { title: 'Definición', text: 'Un intercambio rápido para definir la estructura exacta de la herramienta.' },
      step2: { title: 'Entrega', text: 'Recibes la base funcional. Tomas el control de inmediato.' },
      step3: { title: 'Iteración', text: 'La pruebas en condiciones reales. ¿Detectas una mejora? Pides la evolución, la integramos enseguida.' }
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
    el.textContent = (val !== undefined) ? val : el.dataset.i18nFr;
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
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.dataset.i18nFr = el.textContent;
  });

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
