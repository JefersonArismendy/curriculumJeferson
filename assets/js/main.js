/** ========== Mixitup Filter ==========  */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration: 300,
    }, 
});

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Mostrar menú
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Ocultar menú con botón cerrar
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Cerrar menú al hacer clic en cualquier enlace
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});