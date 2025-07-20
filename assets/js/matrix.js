document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");

  // Fullscreen canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const katakana = "アカサタナハマヤラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレゲゼデベペオコソトノホモヨロゴゾドボポヴン";
  const columns = canvas.width / 20;
  const drops = Array.from({ length: columns }, () => Math.random() * canvas.height);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = "18px monospace";

    drops.forEach((y, i) => {
      const text = katakana.charAt(Math.floor(Math.random() * katakana.length));
      const x = i * 20;
      ctx.fillText(text, x, y);

      // reset to top if out of view
      drops[i] = y > canvas.height ? 0 : y + 20;
    });
  }

  setInterval(drawMatrix, 50);

  // Resize canvas
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
