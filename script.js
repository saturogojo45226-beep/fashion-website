// Shop Now button
const shopBtn = document.querySelector('.cta-button');
shopBtn.addEventListener('click', () => {
    alert('Redirecting to Products section...');
    window.location.href = '#products';
});

// Contact form submit
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    contactForm.reset();
});
