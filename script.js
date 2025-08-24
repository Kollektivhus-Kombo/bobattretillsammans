document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.querySelector('[data-current-year]');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Smooth-scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});