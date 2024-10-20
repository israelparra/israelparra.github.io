// app.js
document.addEventListener('DOMContentLoaded', () => {
    let currentPantalla = 1; // Pantalla actual

    // Función para mostrar la pantalla correcta
    window.mostrarPantalla = function(pantalla) {
        // Ocultar todas las pantallas
        const pantallas = document.querySelectorAll('.pantalla');
        pantallas.forEach(p => p.style.display = 'none');
    
        // Mostrar la pantalla seleccionada
        const pantallaSeleccionada = document.getElementById('pantalla' + pantalla);
        if (pantallaSeleccionada) {
            pantallaSeleccionada.style.display = 'flex';
        } else {
            console.error('Pantalla no encontrada: pantalla' + pantalla);
        }
    };

    // Mostrar la primera pantalla al cargar la página
    mostrarPantalla(1);
});
