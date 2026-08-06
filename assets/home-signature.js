/* ════════════════════════════════════════════════════════════════════════════════
   DIGIHIVE.COM — ACCUEIL — animation "signature" (le logo qui s'assemble)
   Scope : index.html uniquement. Se joue une seule fois, quand la section
   entre dans le viewport (pas de boucle — c'est un moment de révélation,
   pas une texture décorative).
════════════════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const stage = document.getElementById('signature-stage');
  if (!stage) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stage.classList.add('assembled');
        io.unobserve(stage);
      }
    });
  }, { threshold: 0.4 });

  io.observe(stage);
});
