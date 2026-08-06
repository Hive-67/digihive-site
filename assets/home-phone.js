/* ════════════════════════════════════════════════════════════════════════════════
   DIGIHIVE.COM — ACCUEIL — animation "téléphone qui tourne + cubes"
   Scope : index.html uniquement. Joue/pause automatiquement selon la visibilité
   de la section (économise le CPU quand elle n'est pas à l'écran).
════════════════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const stage = document.getElementById('phone-stage');
  if (!stage) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      stage.classList.toggle('active', entry.isIntersecting);
    });
  }, { threshold: 0.35 });

  io.observe(stage);
});
