const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const dots = document.querySelectorAll('.dot');
const testimonials = document.querySelectorAll('.testimonial-card');
const themeToggle = document.getElementById('themeToggle');

let currentTestimonial = 0;
let testimonialInterval;

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

themeToggle?.addEventListener('click', toggleTheme);
initTheme();

function toggleMenu() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
}

function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

function scrollAnimate() {
    const elements = document.querySelectorAll('.room-card, .amenity-card, .gallery-item, .about-content, .about-images, .contact-info, .contact-form-wrapper');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
}

function showTestimonial(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

function nextTestimonial() {
    const next = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(next);
}

function startTestimonialAutoplay() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
}

function stopTestimonialAutoplay() {
    clearInterval(testimonialInterval);
}

function handleSubmit(e) {
    e.preventDefault();
    contactForm.style.display = 'none';
    formSuccess.classList.add('show');
    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formSuccess.classList.remove('show');
    }, 5000);
}

function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    const checkin = document.getElementById('checkin');
    const checkout = document.getElementById('checkout');
    if (checkin) checkin.min = today;
    if (checkout) checkout.min = today;
    checkin?.addEventListener('change', function() {
        const nextDay = new Date(this.value);
        nextDay.setDate(nextDay.getDate() + 1);
        checkout.min = nextDay.toISOString().split('T')[0];
        if (checkout.value && checkout.value <= this.value) {
            checkout.value = nextDay.toISOString().split('T')[0];
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMenu();
        }
    });
});

navToggle.addEventListener('click', toggleMenu);
window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', scrollAnimate);
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.stat-number, .room-price, .section-title');
    elements.forEach(el => el.classList.add('visible'));
});

dots.forEach(dot => {
    dot.addEventListener('click', function() {
        stopTestimonialAutoplay();
        showTestimonial(parseInt(this.dataset.index));
        startTestimonialAutoplay();
    });
});

contactForm.addEventListener('submit', handleSubmit);

document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = this.querySelector('input');
    if (input.value) {
        input.value = '';
        alert('Inscrito na Newsletter Mágica! ✨');
    }
});

scrollAnimate();
setMinDates();
startTestimonialAutoplay();
