// Selecciona todos los enlaces de navegación
const navLinks = document.querySelectorAll('.nav-blog a[data-section]');
// Selecciona todas las secciones
const views = document.querySelectorAll('section.view');

// Función para ocultar todas y mostrar la elegida
function showSection(id) {
  views.forEach(section => {
    section.style.display = (section.id === id) ? 'block' : 'none';
  });
}

// Asigna los listeners a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();               // Evita recarga de página
    const target = link.dataset.section;  // p.ej. "muro"
    showSection(target);
  });

});

// Al cargar, asegúrate de mostrar la sección por defecto
document.addEventListener('DOMContentLoaded', () => {
  showSection('inicio');
});
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces de navegación y las secciones
    const navLinks = document.querySelectorAll('nav a[data-section]');
    const sections = document.querySelectorAll('.view');

    // Función para mostrar la sección correcta y ocultar las demás
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = (section.id === sectionId) ? 'block' : 'none';
        });
    }

    // Agrega un evento 'click' a cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que la página se recargue

            // Obtiene el valor del atributo 'data-section' del enlace
            const sectionId = link.getAttribute('data-section');
            
            // Llama a la función para mostrar la sección
            showSection(sectionId);
            
            // Resalta el enlace activo
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Muestra la sección de 'inicio' por defecto al cargar la página
    showSection('inicio');

    // Toggle de comentarios
    const toggleButtons = document.querySelectorAll('.toggle-comments');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const commentsContainer = button.nextElementSibling;
            if (commentsContainer) {
                const isHidden = commentsContainer.style.display === 'none';
                commentsContainer.style.display = isHidden ? 'block' : 'none';
                button.textContent = isHidden ? 'Ocultar Comentarios' : 'Mostrar Comentarios';
            }
        });
    });
});