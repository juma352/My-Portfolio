// Dark mode toggle script
const toggle = document.querySelector('.dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Save preference to localStorage
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme preference
window.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('theme') === 'dark'){
        document.body.classList.add('dark-mode');
    }
});

// Hamburger menu toggle for mobile
const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu ul');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

// Contact form validation and submission
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const subject = contactForm.subject.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !subject || !message) {
        formStatus.textContent = 'Please fill in all fields.';
        formStatus.className = 'form-status error';
        return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formStatus.textContent = 'Please enter a valid email address.';
        formStatus.className = 'form-status error';
        return;
    }

    // Simulate form submission success
    formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
    formStatus.className = 'form-status success';

    // Reset form
    contactForm.reset();
});
