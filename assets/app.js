/* ════════════════════════════════════════════════════════════════════════════════════
   DIGIHIVE.COM — LOGIQUE PARTAGÉE
   Aucune dépendance externe. Lit CATEGORIES / PRODUCTS depuis data.js.
════════════════════════════════════════════════════════════════════════════════════ */

function $(id){ return document.getElementById(id); }

function fmtPrice(p){
  if (p === null || p === undefined) return '';
  if (typeof p === 'string') return p + ' €'; // ex: "80–150"
  return (Number.isInteger(p) ? p : p.toFixed(2)) + ' €';
}

/* ══ NAV : lien actif + menu mobile ═══════════════════════════════ */
function initNav(){
  const current = window.location.pathname.split('/').pop() + window.location.search;
  document.querySelectorAll('.main-nav a[href]').forEach(a => {
    const target = a.getAttribute('href');
    if (target === current || (target === 'index.html' && current === '')) {
      a.classList.add('active');
    }
  });
  const toggle = $('nav-toggle');
  const nav = $('main-nav');
  if (toggle && nav){
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
}

/* ══ CARD PRODUIT (HTML) ════════════════════════════════════ */
function productCardHTML(p){
  const priceBlock = p.statut === 'exemple'
    ? `<span class="badge-exemple">Exemple</span>`
    : p.statut === 'inclus_avec'
      ? `<span class="badge-exemple">Inclus</span>`
      : `<span class="prod-price">${fmtPrice(p.prix)}</span>`;

  return `
    <a class="prod-card" href="produit.html?id=${encodeURIComponent(p.id)}">
      <span class="prod-tag">${FILTER_LABELS[p.type] || p.type}</span>
      <h3>${p.titre}</h3>
      <p>${p.description_courte}</p>
      <div class="prod-foot">
        ${priceBlock}
      </div>
    </a>`;
}

/* ══ ACCUEIL : cards catégories + produits phares ══════════════════ */
function renderHomeCategories(){
  const el = $('home-categories');
  if (!el) return;
  const order = ['logiciel','template','formation','service'];
  el.innerHTML = order.map(type => {
    const cat = CATEGORIES.find(c => c.type === type);
    const label = cat ? cat.nom : FILTER_LABELS[type];
    const line = cat ? cat.accroche : '';
    return `
      <a class="cat-card" href="categorie.html?type=${type}">
        <span class="hex">⬡</span>
        <h3>${label}</h3>
        <p>${line}</p>
      </a>`;
  }).join('');
}

function renderHomeFeatured(){
  const el = $('home-featured');
  if (!el) return;
  const featured = PRODUCTS.filter(p => p.featured);
  el.innerHTML = featured.length
    ? featured.map(productCardHTML).join('')
    : `<p class="empty-state">Aucun produit mis en avant pour le moment.</p>`;
}

/* ══ CATALOGUE : filtres + grille ════════════════════════════ */
function renderCatalogue(){
  const grid = $('catalogue-grid');
  const filtersEl = $('catalogue-filters');
  if (!grid || !filtersEl) return;

  const typesPresent = [...new Set(PRODUCTS.map(p => p.type))];
  const filters = ['tous', ...typesPresent];

  filtersEl.innerHTML = filters.map(f => {
    const label = f === 'tous' ? 'Tous' : (FILTER_LABELS[f] || f);
    return `<button class="filter-btn${f === 'tous' ? ' active' : ''}" data-filter="${f}">${label}</button>`;
  }).join('');

  function draw(filter){
    const list = filter === 'tous' ? PRODUCTS : PRODUCTS.filter(p => p.type === filter);
    grid.innerHTML = list.length
      ? list.map(productCardHTML).join('')
      : `<p class="empty-state">Aucun produit dans cette catégorie pour l'instant.</p>`;
  }

  filtersEl.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    draw(btn.dataset.filter);
  });

  draw('tous');
}

/* ══ PAGE CATÉGORIE ═══════════════════════════════════ */
function renderCategoryPage(){
  const heroEl = $('cat-hero');
  const gridEl = $('cat-products');
  if (!heroEl || !gridEl) return;

  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const cat = CATEGORIES.find(c => c.type === type);
  const label = cat ? cat.nom : (FILTER_LABELS[type] || 'Catégorie');

  if (!cat){
    heroEl.innerHTML = `
      <span class="eyebrow">Catégorie</span>
      <h1>${label}</h1>
      <div class="cat-hero-block"><p>Contenu à venir pour cette catégorie.</p></div>`;
  } else {
    heroEl.innerHTML = `
      <span class="eyebrow">${cat.nom}</span>
      <h1>${cat.accroche}</h1>
      <div class="cat-hero-block">
        <h4>Le constat</h4>
        <p>${cat.constat}</p>
      </div>
      <div class="cat-hero-block">
        <h4>La solution</h4>
        <p>${cat.solution}</p>
      </div>
      <div class="cat-hero-block">
        <h4>Comment ça marche</h4>
        <ul class="cat-hero-list">${cat.etapes.map(e => `<li>${e}</li>`).join('')}</ul>
      </div>
      <div class="cat-hero-block">
        <h4>Ce qui change pour toi</h4>
        <ul class="cat-hero-list">${cat.avantages.map(a => `<li>${a}</li>`).join('')}</ul>
      </div>
      ${cat.statut === 'brouillon' ? `<span class="draft-flag">Contenu provisoire — à retravailler dans une session dédiée à cette catégorie.</span>` : ''}
    `;
  }

  const list = PRODUCTS.filter(p => p.type === type);
  gridEl.innerHTML = list.length
    ? list.map(productCardHTML).join('')
    : `<p class="empty-state">Aucun produit publié dans cette catégorie pour l'instant.</p>`;
}

/* ══ PAGE PRODUIT ══════════════════════════════════════ */
function renderProductPage(){
  const el = $('product-detail');
  if (!el) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = PRODUCTS.find(x => x.id === id);

  if (!p){
    el.innerHTML = `<p class="empty-state">Produit introuvable.</p>`;
    return;
  }

  let ctaHTML = '';
  if (p.cta_type === 'stripe' && p.stripe_payment_link){
    ctaHTML = `<a class="btn btn-primary" href="${p.stripe_payment_link}" target="_blank" rel="noopener">Acheter — ${fmtPrice(p.prix)}</a>`;
  } else if (p.cta_type === 'mailto'){
    const subject = encodeURIComponent(`Devis — ${p.titre}`);
    const body = encodeURIComponent(`Bonjour,\n\nJe souhaite un devis pour : ${p.titre}\n\nMerci !`);
    ctaHTML = `<a class="btn btn-primary" href="mailto:systemhiveos@gmail.com?subject=${subject}&body=${body}">Demander un devis</a>`;
  } else if (p.statut === 'exemple'){
    ctaHTML = `<span class="btn btn-disabled">Bientôt disponible</span>`;
  } else if (p.statut === 'inclus_avec'){
    ctaHTML = `<span class="btn btn-disabled">${p.note || 'Inclus avec une autre option'}</span>`;
  }

  el.innerHTML = `
    <span class="prod-tag">${FILTER_LABELS[p.type] || p.type}</span>
    <h1>${p.titre}</h1>
    <p class="desc">${p.description_courte}</p>
    <div class="price-row">
      ${p.prix !== null && p.prix !== undefined ? `<span class="price-big">${fmtPrice(p.prix)}</span>` : ''}
      ${ctaHTML}
    </div>
    ${p.note && p.statut !== 'inclus_avec' ? `<p class="product-note">${p.note}</p>` : ''}
    ${p.statut === 'exemple' ? `<p class="product-note">Exemple de structure — ce produit n'est pas encore en vente.</p>` : ''}
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderHomeCategories();
  renderHomeFeatured();
  renderCatalogue();
  renderCategoryPage();
  renderProductPage();
});
