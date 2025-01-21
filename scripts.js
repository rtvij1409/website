// BURGER MENU
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.classList.toggle('toggle');
});

// CONTACT FORM SUBMISSION
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  contactForm.reset();
});
