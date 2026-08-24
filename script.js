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

navItems.forEach(item => {
  item.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('active');
  });
});

// Typewriter Effect for Dynamic Titles
const typingText = document.querySelector('.typing-text');
const words = [
  'Software Engineer',
  'UI/UX Designer',
  'Frontend Developer',
  'Full Stack Aspirant'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typingSpeed = 1800;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 400;
  }

  setTimeout(typeEffect, typingSpeed);
}

// Scroll Reveal Observer
document.addEventListener('DOMContentLoaded', () => {
  if (typingText) setTimeout(typeEffect, 400);

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
  const animatedElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  animatedElements.forEach(el => scrollObserver.observe(el));
});