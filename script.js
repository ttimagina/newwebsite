const button = document.querySelector('.menu');
const nav = document.querySelector('#navlinks');

function setMenu(open) {
  nav?.classList.toggle('open', open);
  button?.setAttribute('aria-expanded', String(open));
  button?.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

button?.addEventListener('click', () => {
  setMenu(!nav?.classList.contains('open'));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 820) setMenu(false);
});
