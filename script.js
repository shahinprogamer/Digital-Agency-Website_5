// ========== MOBILE NAV TOGGLE ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}

// Close mobile nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      const icon = hamburger?.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });
});

// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  let current = '';
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// ========== CONTACT FORM (DEMO) ==========
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    if (name && email && service && message) {
      formFeedback.innerHTML = `✓ Thanks, ${name}! Your message has been sent. We'll get back to you within 24 hours. (Demo only)`;
      formFeedback.style.color = '#22c55e';
      contactForm.reset();

      setTimeout(() => {
        formFeedback.innerHTML = '';
      }, 6000);
    } else {
      formFeedback.innerHTML = '⚠️ Please fill in all required fields.';
      formFeedback.style.color = '#ef4444';
    }
  });
}

// ========== NEWSLETTER FORM (DEMO) ==========
const newsletterForm = document.getElementById('newsletterForm');
const newsletterFeedback = document.getElementById('newsletterFeedback');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value.trim();

    if (email) {
      newsletterFeedback.textContent = `✓ You're subscribed! (Demo only)`;
      newsletterForm.reset();
      setTimeout(() => {
        newsletterFeedback.textContent = '';
      }, 5000);
    }
  });
}

// ========== SMOOTH SCROLL FALLBACK ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== RESIZE HANDLING ==========
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    const icon = hamburger?.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }
});

// ========== SCROLL REVEAL ANIMATION ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const revealElements = document.querySelectorAll(
  '.service-card, .work-card, .process-step, .testimonial-card, .about-text, .about-visual, .contact-info, .contact-form'
);

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});

// ========== HEADER SHADOW ON SCROLL ==========
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 8px 30px rgba(0,0,0,0.4)';
    header.style.background = 'rgba(10, 10, 15, 0.95)';
  } else {
    header.style.boxShadow = 'none';
    header.style.background = 'rgba(10, 10, 15, 0.82)';
  }
});

// ========== HERO CARD CHART BARS ANIMATION ON LOAD ==========
window.addEventListener('load', () => {
  const bars = document.querySelectorAll('.chart-bars span');
  bars.forEach((bar, i) => {
    bar.style.animationDelay = `${i * 0.1}s`;
  });
});