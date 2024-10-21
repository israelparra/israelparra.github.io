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
            currentPantalla = pantalla;

            // Deshabilitar el botón "Siguiente" en la última pantalla
            const siguienteBtn = pantallaSeleccionada.querySelector('.btn-love');
            if (siguienteBtn && pantalla === 12) {
                siguienteBtn.style.display = 'none';
            }
        } else {
            console.error('Pantalla no encontrada: pantalla' + pantalla);
        }
    };

    // Agregar eventos de clic a todos los botones "Siguiente"
    const botonesNext = document.querySelectorAll('.btn-love');
    botonesNext.forEach((btn, index) => {
        btn.addEventListener('click', () => mostrarPantalla(index + 2));
    });

    // Mostrar la primera pantalla al cargar la página
    mostrarPantalla(1);

    // Prevenir el desplazamiento de la página
    document.body.style.overflow = 'hidden';

    // Manejar los botones "Sí" y "No" en la última pantalla
    const ultimaPantalla = document.getElementById('pantalla12');
    const botones = ultimaPantalla.querySelectorAll('.btn-love');
    
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            if (this.textContent === 'Sí') {
                alert('¡Qué felicidad! ¡Gracias por aceptar!');
            } else {
                alert('Oh, entiendo. Gracias por tu honestidad.');
            }
        });
    });
});