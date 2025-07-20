// Optional: subtle hover shake for buttons
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('mouseover', () => btn.classList.add('hover'));
  btn.addEventListener('mouseout', () => btn.classList.remove('hover'));
});
