// Mobile nav toggle
const navToggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggleButton?.addEventListener('click', () => {
  const expanded = navToggleButton.getAttribute('aria-expanded') === 'true';
  navToggleButton.setAttribute('aria-expanded', String(!expanded));
  navLinks?.classList.toggle('show');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('show');
    navToggleButton?.setAttribute('aria-expanded', 'false');
  });
});

// Active link highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const onScroll = () => {
  const scrollPos = window.scrollY + 120; // offset for sticky navbar
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const bottom = top + rect.height;
    const id = section.getAttribute('id');
    const isActive = scrollPos >= top && scrollPos < bottom;
    navAnchors.forEach((a) => {
      if (a.getAttribute('href') === `#${id}`) {
        a.classList.toggle('active', isActive);
      }
    });
  });
};

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// Back to top button visibility
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (!backToTop) return;
  backToTop.classList.toggle('show', window.scrollY > 300);
});
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());



