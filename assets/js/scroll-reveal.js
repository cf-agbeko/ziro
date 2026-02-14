// assets/js/scroll-reveal.js
document.addEventListener('DOMContentLoaded', () => {
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          obs.unobserve(entry.target);
        }
      });
    }, options);
  
    document.querySelectorAll('[data-reveal]')
      .forEach(el => observer.observe(el));
  });
  