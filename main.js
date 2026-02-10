
// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Menu
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggleBtn?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  toggleBtn.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks?.classList.remove('open');
    }
  });
});

// Theme toggle
const key = 'theme';
function applyTheme(val){ document.documentElement.setAttribute('data-theme', val); }
const saved = localStorage.getItem(key);
if (saved) applyTheme(saved);
document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const next = (document.documentElement.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
  applyTheme(next); localStorage.setItem(key, next);
});
