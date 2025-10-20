document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links a');

  if (!hamburger || !navLinks) return;

  const openMenu = () => {
    hamburger.classList.add('active');
    navLinks.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('active');
    if (isOpen) closeMenu();
    else openMenu();
  });

  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.classList.contains('active')) return;
    const target = e.target;
    if (target === hamburger || hamburger.contains(target)) return;
    if (target === navLinks || navLinks.contains(target)) return;
    closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
    }
  });
});

