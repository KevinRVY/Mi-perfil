// Buscamos el botón y el párrafo vacío por sus IDs
const boton = document.getElementById('btn-saludo');
const mensaje = document.getElementById('mensaje-oculto');

// Cuando se hace clic en el botón, se ejecuta esta función
boton.addEventListener('click', function() {
    mensaje.textContent = "¡Gracias por visitar mi perfil de Legal Tech!";
});