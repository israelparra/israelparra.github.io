document.addEventListener('DOMContentLoaded', () => {
    let currentPantalla = 1; // Pantalla actual
    
    function mostrarPantalla(pantalla) {
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
    }

    // Navegar a la siguiente pantalla
    function siguientePantalla() {
        currentPantalla++;
        mostrarPantalla(currentPantalla);
    }

    // Añadir eventos a los botones de navegación
    const botonesSiguiente = document.querySelectorAll('.btn-love');
    botonesSiguiente.forEach((boton, index) => {
        boton.addEventListener('click', () => mostrarPantalla(index + 2));
    });
});
