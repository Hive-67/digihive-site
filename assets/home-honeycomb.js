/* ════════════════════════════════════════════════════════════════════════════════
   DIGIHIVE.COM — ACCUEIL — FOND ALVÉOLES (canvas)
   Portage fidèle de l'algorithme fourni (dessin hexagone pointe-en-haut,
   quadrillage en damier, dégradé radial "bombé" par cellule, ombre portée),
   recoloré avec la palette actuelle du site (beige/blanc cassé en clair,
   brun/orangé en sombre). N'affecte que index.html.
════════════════════════════════════════════════════════════════════════════════════ */

(function () {
  const LIGHT = {
    hexSize: 26,
    gap: 1.5,
    colors: {
      bg: '#F2E9DC',
      hex1: '#F1E4D3',
      hex2: '#E4D2B8',
      stroke: 'rgba(43,38,34,0.25)',
      highlight: '#FFFDF8',
      shadow: '#C2A17A'
    },
    strokeWidth: 1,
    shadow: true,
    gradient: true,
    rotation: 0
  };

  const DARK = {
    hexSize: 26,
    gap: 1.5,
    colors: {
      bg: '#33241A',
      hex1: '#3F2C1E',
      hex2: '#4A3826',
      stroke: 'rgba(255,170,90,0.32)',
      highlight: '#FFC46B',
      shadow: '#1A120C'
    },
    strokeWidth: 1,
    shadow: true,
    gradient: true,
    rotation: 0
  };

  function drawHexagon(ctx, cx, cy, size, rotation, fill, stroke, lw) {
    const points = 6;
    ctx.beginPath();
    for (let i = 0; i < points; i++) {
      const angle = rotation + (i * Math.PI / 3) - Math.PI / 6;
      const x = cx + size * Math.cos(angle);
      const y = cy + size * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill();
    }
    if (stroke && lw > 0) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = lw;
      ctx.stroke();
    }
  }

  function drawHoneycomb(canvas, config) {
    const parent = canvas.parentElement;
    const dpr = window.devicePixelRatio || 1;
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    if (!w || !h) return;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    const ctx = canvas.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    const { hexSize, gap, colors, strokeWidth, shadow, gradient, rotation } = config;
    const size = hexSize;
    const spacingX = size * 1.75 + gap;
    const spacingY = size * 1.55 + gap;
    const offsetX = size * 0.9;

    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, w, h);

    if (shadow) {
      ctx.shadowColor = 'rgba(0,0,0,0.35)';
      ctx.shadowBlur = size * 0.4;
      ctx.shadowOffsetX = size * 0.08;
      ctx.shadowOffsetY = size * 0.12;
    } else {
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
    }

    const cols = Math.ceil(w / spacingX) + 3;
    const rows = Math.ceil(h / spacingY) + 3;
    const startX = -spacingX * 0.5;
    const startY = -spacingY * 0.5;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = startX + col * spacingX + (row % 2) * offsetX;
        const y = startY + row * spacingY;

        const fillColor = (col + row) % 2 === 0 ? colors.hex1 : colors.hex2;
        const strokeColor = colors.stroke;

        if (gradient && shadow) {
          const grad = ctx.createRadialGradient(
            x - size * 0.15, y - size * 0.2, size * 0.1,
            x, y, size * 0.95
          );
          grad.addColorStop(0, colors.highlight);
          grad.addColorStop(0.5, fillColor);
          grad.addColorStop(1, colors.shadow);
          drawHexagon(ctx, x, y, size, rotation, grad, strokeColor, strokeWidth);
        } else {
          drawHexagon(ctx, x, y, size, rotation, fillColor, strokeColor, strokeWidth);
        }
      }
    }

    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  }

  let canvas = null;

  function render() {
    if (!canvas) return;
    const theme = document.body.getAttribute('data-theme') === 'dark' ? DARK : LIGHT;
    drawHoneycomb(canvas, theme);
  }

  window.renderHoneycombBg = render;

  document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('honeycomb-bg');
    if (!canvas) return;

    render();

    const ro = new ResizeObserver(() => render());
    ro.observe(document.body);

    window.addEventListener('resize', () => {
      requestAnimationFrame(render);
    });
  });
})();
