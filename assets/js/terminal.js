// matrix.js — loader + page reveal

let progress = 0;
const loaderBar = document.getElementById('loader-progress');
const loaderText = document.getElementById('loader-text');
const loader = document.getElementById('loader');
const main = document.getElementById('main-content');

const interval = setInterval(() => {
  if (progress >= 100) {
    clearInterval(interval);
    loader.style.display = 'none';
    main.style.display = 'block';
  } else {
    progress += Math.random() * 12;
    if (progress > 100) progress = 100;
    loaderBar.style.width = `${progress}%`;
    loaderText.textContent = `Loading... ${Math.floor(progress)}%`;
  }
}, 80);
