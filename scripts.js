// scripts.js

// Puedes agregar aquí cualquier funcionalidad extra que necesites
// scripts.js

// Obtén el elemento del navbar
const navbar = document.getElementById('navbar');

// Variable para almacenar la posición anterior del scroll
let lastScrollTop = 0;

// Añade un evento de scroll a la ventana
window.addEventListener('scroll', () => {
    // Obtén la posición actual del scroll
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Compara la posición del scroll actual con la anterior
    if (scrollTop > lastScrollTop) {
        // Si se está desplazando hacia abajo, oculta el navbar
        navbar.classList.add('hidden');
    } else {
        // Si se está desplazando hacia arriba, muestra el navbar
        navbar.classList.remove('hidden');
    }

    // Actualiza la posición del scroll anterior
    lastScrollTop = scrollTop;
});
