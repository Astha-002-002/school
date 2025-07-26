// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar shadow effect on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.classList.add('shadow-lg');
  } else {
    nav.classList.remove('shadow-lg');
  }
});

// Back to top button
const backToTop = document.createElement('button');
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.className = 'back-to-top btn btn-primary';
document.body.appendChild(backToTop);

backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.display = 'none';
backToTop.style.borderRadius = '50%';
backToTop.style.width = '45px';
backToTop.style.height = '45px';
backToTop.style.fontSize = '18px';

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animate sections on scroll
const elements = document.querySelectorAll('.section, .highlight-card, .stats .col-md-3, .gallery img');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Carousel fade effect
const carouselItems = document.querySelectorAll('.carousel-item img');
carouselItems.forEach(img => {
  img.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
});
