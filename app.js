document.addEventListener('DOMContentLoaded', () => {
    let currentPantalla = 1;
    const totalPantallas = 11; // Número total de pantallas
    let startX = 0;
    
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

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        if (!startX) return;

        let moveX = event.touches[0].clientX;
        let diffX = startX - moveX;

        // Si el desplazamiento es mayor a 50px, cambiar pantalla
        if (diffX > 50) {
            if (currentPantalla < totalPantallas) {
                currentPantalla++;
                mostrarPantalla(currentPantalla);
            }
        } else if (diffX < -50) {
            if (currentPantalla > 1) {
                currentPantalla--;
                mostrarPantalla(currentPantalla);
            }
        }
        startX = 0; // Reiniciar el punto de inicio
    }

    // Añadir los listeners de swipe
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
});
