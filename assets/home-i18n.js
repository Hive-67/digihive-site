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
    showcase: {
      eyebrow: 'In practice',
      title: 'Your idea, turned into an application'
    },
    signature: {
      eyebrow: 'The brand',
      title: 'DigiHive, built piece by piece'
    },
    concept: {
      eyebrow: 'The concept',
      title: 'Build an app that actually looks like you',
      text1: 'Stop paying for an app that doesn’t fit you 100%. Write your own, use it, and improve it over time.',
      text2: 'Your project grows? Ask for an addition or a tweak, we take care of it for you.'
    },
    audience: {
      eyebrow: 'Who it’s for',
      title: 'Who this is for',
      beginners: {
        sub: 'Zero code, zero stress',
        title: 'Everyone',
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
      step1: { title: 'Scoping', text: 'A quick exchange, in person or through a fully online form, to define the exact structure of the tool.' },
      step2: { title: 'Delivery', text: 'You receive the working base. You take control right away.' },
      step3: { title: 'Real-world test', text: 'You get it, use it, and note down the changes you want: we roll them in right away.' }
    },
    catSection: {
      eyebrow: 'Categories', title: 'One ecosystem, several worlds',
      text: 'Each category works differently, but everything is managed in the same place.'
    },
    siteweb: {
      eyebrow: 'Other needs?',
      title: 'We also build your website',
      text: 'Landing page, portfolio, multi-page site: we also design your website, fully custom. With or without content management, with or without hosting/deployment: you choose what you handle yourself and what we take care of for you.',
      cta: 'See the website offers'
    },
    categories: {
      logiciel: { nom: 'Software', accroche: 'Your own software, without software prices.' },
      template: { nom: 'Discord Templates', accroche: 'Your Discord server, ready in one command.' },
      formation: { nom: 'Courses', accroche: 'Learn to do yourself what others charge for.' },
      service: { nom: 'Custom Creations', accroche: 'Your project, designed and delivered by someone who knows the craft.' }
    }
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
    showcase: {
      eyebrow: 'Concretamente',
      title: 'Tu idea, convertida en aplicación'
    },
    signature: {
      eyebrow: 'La marca',
      title: 'DigiHive, pensado pieza por pieza'
    },
    concept: {
      eyebrow: 'El concepto',
      title: 'Crea una app que realmente se parezca a ti',
      text1: 'Deja de pagar por una aplicación que no te encaja al 100 %. Crea la tuya, úsala y mejórala con el tiempo.',
      text2: '¿Tu proyecto crece? Pídenos una mejora o un ajuste, nosotros nos encargamos.'
    },
    audience: {
      eyebrow: '¿Para quién?',
      title: '¿A quién va dirigido?',
      beginners: {
        sub: 'Cero código, cero estrés',
        title: 'Todo el mundo',
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
      step1: { title: 'Definición', text: 'Un intercambio rápido, en directo o mediante un formulario 100 % online, para definir la estructura exacta de la herramienta.' },
      step2: { title: 'Entrega', text: 'Recibes la base funcional. Tomas el control de inmediato.' },
      step3: { title: 'Prueba en condiciones reales', text: 'Lo recibes, lo usas y anotas los cambios que quieres: los integramos enseguida.' }
    },
    catSection: {
      eyebrow: 'Categorías', title: 'Un ecosistema, varios universos',
      text: 'Cada categoría funciona a su manera, pero todo se gestiona en el mismo lugar.'
    },
    siteweb: {
      eyebrow: '¿Otra necesidad?',
      title: 'También creamos tu sitio web',
      text: 'Landing, portfolio, varias páginas: también diseñamos tu sitio web, totalmente a medida. Con o sin gestión de contenido, con o sin puesta en línea: tú eliges qué gestionas tú mismo y qué nos encargamos nosotros.',
      cta: 'Ver las ofertas de sitio web'
    },
    categories: {
      logiciel: { nom: 'Software', accroche: 'Tu software, sin precios de software.' },
      template: { nom: 'Plantillas Discord', accroche: 'Tu servidor Discord, listo en un comando.' },
      formation: { nom: 'Formaciones', accroche: 'Aprende a hacer tú mismo lo que otros cobran.' },
      service: { nom: 'Creaciones a Medida', accroche: 'Tu proyecto, pensado y entregado por alguien que entiende del tema.' }
    }
  }
};

const LANG_KEY = 'digihive-lang';
const THEME_KEY = 'digihive-theme';

function getTranslation(lang, path){
  if (lang === 'fr') return undefined;
  const dict = HOME_I18N[lang];
  if (!dict) return undefined;
  return path.split('.').reduce((node, key) => (node ? node[key] : undefined), dict);
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
