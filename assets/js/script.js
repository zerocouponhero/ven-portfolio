// Blinking cursor effect for main heading
const h1 = document.querySelector('main h1');
let showCursor = true;
setInterval(() => {
  h1.innerText = showCursor
    ? '# Welcome _'
    : '# Welcome';
  showCursor = !showCursor;
}, 600);
