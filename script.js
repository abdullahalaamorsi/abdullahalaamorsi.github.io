// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  if (document.body.classList.contains('dark-theme')) {
    themeToggleBtn.textContent = '☀️';
  } else {
    themeToggleBtn.textContent = '🌙';
  }
});

// Mobile Hamburger Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking any navigation link
navItems.forEach(item => {
  item.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('active');
  });
});

// Scroll Reveal Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
};

const scrollObserver = new IntersectionObserver(revealCallback, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  animatedElements.forEach(el => scrollObserver.observe(el));
});