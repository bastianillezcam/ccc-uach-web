/* ===========================================
   CCC-UACh — Scripts del sitio
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== Menú móvil =====
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const isOpen = mainNav.classList.contains('open');
      menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });

    // Cerrar menú al hacer click en un enlace (móvil)
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
          menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
      });
    });
  }

  // ===== Año dinámico en footer =====
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== Animación fade-in al hacer scroll =====
  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: mostrar todo si no hay soporte
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // ===== Scroll suave para anchors internos =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });

  // ===== Lightbox simple para galería =====
  const galleryItems = document.querySelectorAll('.gallery-item img');
  if (galleryItems.length) {
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    Object.assign(overlay.style, {
      position: 'fixed', inset: '0',
      background: 'rgba(6, 42, 85, 0.92)',
      display: 'none', alignItems: 'center', justifyContent: 'center',
      zIndex: '9999', cursor: 'zoom-out', padding: '40px'
    });
    const img = document.createElement('img');
    Object.assign(img.style, { maxWidth: '90vw', maxHeight: '90vh', borderRadius: '8px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' });
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    Object.assign(closeBtn.style, {
      position: 'absolute', top: '20px', right: '30px',
      color: '#fff', fontSize: '3rem', cursor: 'pointer', lineHeight: '1'
    });
    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        img.src = item.src;
        img.alt = item.alt || '';
        overlay.style.display = 'flex';
      });
    });

    overlay.addEventListener('click', () => { overlay.style.display = 'none'; });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') overlay.style.display = 'none';
    });
  }

});
