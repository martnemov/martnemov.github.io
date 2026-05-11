// ─── Scroll reveal ────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ─── Nav scroll effect ────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background =
    window.scrollY > 40
      ? 'rgba(13,13,15,0.95)'
      : 'rgba(13,13,15,0.8)';
});

// ─── Burger menu ─────────────────────────────────
const burger = document.getElementById('burger');
const menu   = document.getElementById('mobileMenu');
let menuOpen = false;

burger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  menu.classList.toggle('open', menuOpen);
  const spans = burger.querySelectorAll('span');
  if (menuOpen) {
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    spans.forEach((s) => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

menu.querySelectorAll('.mm-link').forEach((link) => {
  link.addEventListener('click', () => {
    menuOpen = false;
    menu.classList.remove('open');
    burger.querySelectorAll('span').forEach((s) => {
      s.style.transform = '';
      s.style.opacity   = '';
    });
  });
});

// ─── Active nav link on scroll ────────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((a) => a.style.color = '');
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.style.color = 'var(--accent)';
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => sectionObserver.observe(s));
