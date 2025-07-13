// Initialize AOS
AOS.init();

// Language Toggle
const languageSelect = document.getElementById('language');
const translatableElements = document.querySelectorAll('[data-en][data-pt]');
const translatablePlaceholders = document.querySelectorAll('[data-en-placeholder][data-pt-placeholder]');

languageSelect.addEventListener('change', () => {
  const lang = languageSelect.value;
  translatableElements.forEach(elem => {
    elem.textContent = elem.getAttribute(`data-${lang}`);
  });
  translatablePlaceholders.forEach(elem => {
    elem.placeholder = elem.getAttribute(`data-${lang}-placeholder`);
  });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Typing Effect
const typingElement = document.querySelector('.typing-effect');
const text = typingElement.getAttribute('data-en');
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent = text.substring(0, index + 1);
    index++;
    setTimeout(type, 100);
  }
}
type();

// Project Filters
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons?.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');
    
    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
