const toggle = document.getElementById('navToggle');
const mobile = document.getElementById('navMobile');

function closeMobileMenu() {
  if (!toggle || !mobile) return;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Menü öffnen');
  mobile.hidden = true;
}

toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.setAttribute('aria-label', expanded ? 'Menü öffnen' : 'Menü schließen');
  mobile.hidden = expanded;
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMobileMenu();
});

document.addEventListener('click', (event) => {
  if (!mobile || mobile.hidden) return;
  if (!mobile.contains(event.target) && !toggle?.contains(event.target)) closeMobileMenu();
});

mobile?.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', closeMobileMenu);
});
