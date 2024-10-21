document.addEventListener('DOMContentLoaded', () => {
    // Mostrar la primera pantalla al cargar la página
    mostrarPantalla(1);

    // Agregar eventos de clic a todos los botones "Siguiente"
    document.querySelectorAll('.siguiente-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const siguientePantalla = this.getAttribute('data-siguiente');
            mostrarPantalla(parseInt(siguientePantalla));
        });
    });

    // Agregar eventos de clic a los botones de respuesta final
    document.querySelectorAll('.respuesta-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const respuesta = this.getAttribute('data-respuesta');
            manejarRespuesta(respuesta);
        });
    });
});

function mostrarPantalla(numeroPantalla) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.style.display = 'none';
    });

    // Mostrar la pantalla seleccionada
    const pantallaSeleccionada = document.getElementById('pantalla' + numeroPantalla);
    if (pantallaSeleccionada) {
        pantallaSeleccionada.style.display = 'flex';
    } else {
        console.error('Pantalla no encontrada: pantalla' + numeroPantalla);
    }
}

function manejarRespuesta(decision) {
    if (decision === 'Sí') {
        alert('¡Qué felicidad! ¡Gracias por aceptar!');
    } else {
        alert('Oh, entiendo. Gracias por tu honestidad.');
    }
}