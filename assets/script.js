// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.navbar nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
  // Game-style hover animation
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.12) skewX(-8deg)';
    link.style.boxShadow = '0 0 12px #7fffd4cc';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = '';
    link.style.boxShadow = '';
  });
});

// Animated navbar on scroll (hide on scroll down, show on scroll up)
let lastScrollY = window.scrollY;
let navbar = document.querySelector('.navbar');
let ticking = false;
window.addEventListener('scroll', () => {
  if (!navbar) navbar = document.querySelector('.navbar');
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        navbar.style.top = '-100px'; // Hide
      } else {
        navbar.style.top = '0'; // Show
      }
      lastScrollY = currentScrollY;
      ticking = false;
    });
    ticking = true;
  }
});

// Contact form handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
  });
}

// Animated hero text (IP address effect)
const heroText = 'Utsav Shrestha';
const heroAnimated = document.getElementById('hero-animated-text');
const ipSegments = [
  '192.168.0.1',
  '10.0.0.5',
  '172.16.254.3',
  '8.8.8.8',
  '127.0.0.1',
  '255.255.255.0',
  '1.1.1.1',
  '100.64.0.2',
  '224.0.0.9',
  '203.0.113.5'
];
let revealProgress = 0;

function randomIPChar() {
  const ip = ipSegments[Math.floor(Math.random() * ipSegments.length)];
  return ip[Math.floor(Math.random() * ip.length)];
}

function animateHeroText() {
  let display = '';
  for (let i = 0; i < heroText.length; i++) {
    if (i < revealProgress) {
      display += heroText[i];
    } else if (heroText[i] === ' ') {
      display += ' ';
    } else {
      display += randomIPChar();
    }
  }
  heroAnimated.textContent = display;
  if (revealProgress < heroText.length) {
    revealProgress++;
    setTimeout(animateHeroText, 110);
  }
}

if (heroAnimated) animateHeroText();

// Animated label for contact form name (IP address effect)
const nameLabelText = 'Your Name';
const nameAnimatedLabel = document.getElementById('name-animated-label');
let nameRevealProgress = 0;

function animateNameLabel() {
  let display = '';
  for (let i = 0; i < nameLabelText.length; i++) {
    if (i < nameRevealProgress) {
      display += nameLabelText[i];
    } else if (nameLabelText[i] === ' ') {
      display += ' ';
    } else {
      display += randomIPChar();
    }
  }
  nameAnimatedLabel.textContent = display;
  if (nameRevealProgress < nameLabelText.length) {
    nameRevealProgress++;
    setTimeout(animateNameLabel, 70);
  }
}

if (nameAnimatedLabel) animateNameLabel();

// Twinkling stars background
const starsBg = document.querySelector('.stars-bg');
if (starsBg) {
  const numStars = 60;
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star' + (Math.random() < 0.25 ? ' red' : '');
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = (Math.random() * 2.5) + 's';
    star.style.animationDuration = (2 + Math.random() * 2) + 's';
    starsBg.appendChild(star);
  }
} 