const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenu = document.getElementById('closeMenu');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');

  // Abrir menú
  hamburger?.addEventListener('click', () => {
    mobileMenu?.classList.add('active');
    menuOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  });

  // Cerrar menú con botón X
  closeMenu?.addEventListener('click', () => {
    mobileMenu?.classList.remove('active');
    menuOverlay?.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
  });

  // Cerrar menú con overlay
  menuOverlay?.addEventListener('click', () => {
    mobileMenu?.classList.remove('active');
    menuOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Cerrar menú al hacer clic en un enlace
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.remove('active');
      menuOverlay?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });