const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const letters = "ア イ ウ エ オ カ キ ク ケ コ サ シ ス セ ソ タ チ ツ テ ト ナ ニ ヌ ネ ノ マ ミ ム メ モ ラ リ ル レ ロ ワ ヲ ン".split(" ");
const fontSize = 16;
const columns = Math.floor(window.innerWidth / fontSize);
const drops = new Array(columns).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);

let percentage = 0;
const loadingText = document.getElementById('loading-percentage');

function updateLoader() {
  percentage++;
  loadingText.textContent = `${percentage}%`;
  if (percentage < 100) {
    setTimeout(updateLoader, 10); // Fast load
  } else {
    setTimeout(() => {
      document.getElementById('loading-screen').style.display = 'none';
    }, 200);
  }
}

document.addEventListener('DOMContentLoaded', updateLoader);
