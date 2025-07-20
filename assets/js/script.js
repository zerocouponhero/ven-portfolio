document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('main h1').forEach(h1 => {
    const text = h1.textContent;
    h1.innerHTML = text + '<span class="cursor"></span>';
  });
});
