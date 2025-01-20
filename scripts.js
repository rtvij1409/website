// Burger Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Toggle Nav
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
});

// Contact Form Submission (Basic Alert)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you can add form validation or AJAX submission
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
});
