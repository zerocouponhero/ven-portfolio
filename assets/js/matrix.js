const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Fullscreen canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Katakana characters only
const katakana = 'アィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲン';
const characters = katakana.split('');

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = new Array(columns).fill(1);

function drawMatrix() {
  // Fading background for trail effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00FF00'; // Neon green
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, i) => {
    const text = characters[Math.floor(Math.random() * characters.length)];
    const x = i * fontSize;
    ctx.fillText(text, x, y * fontSize);

    // Reset drop randomly
    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  });
}

setInterval(drawMatrix, 50);

// Resize handler
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
