document.addEventListener('DOMContentLoaded', function() {

    // Se seleccionan los elementos usando los IDs del archivo html
    const contactForm = document.getElementById('formulario-contacto');
    const mensajeDiv = document.getElementById('mensaje-respuesta');

    contactForm.addEventListener('submit', function(event) {
        
        event.preventDefault();

        // Se obtienen los valores de los inputs con sus IDs
        const nombreInput = document.getElementById('nombre');
        const emailInput = document.getElementById('correo');

        const nombre = nombreInput.value;
        const email = emailInput.value;

        if (nombre === '' || email === '') {
            mensajeDiv.textContent = 'Por favor, completa todos los campos.';
            mensajeDiv.style.color = 'red';
        } else {
            mensajeDiv.textContent = `Hola ${nombre}, hemos recibido tu consulta. Te contactaremos pronto a ${email}.`;
            mensajeDiv.style.color = 'green';
        }
    });

    // Aqui va el codigo del boton misterioso

    const btn = document.querySelector("#boton-misterioso");
    const gifContenedor = document.querySelector("#contenedor-gif");
    
    btn.addEventListener("click", () => {
    gifContenedor.innerHTML = "";
    const gif = document.createElement('img');
    gif.src = 'Yoshi_Bailando.webp';
        // Añadimos el nuevo elemento <img> dentro de nuestro contenedor
        gifContenedor.appendChild(gif);

        // Si quieres que el GIF desaparezca después de un tiempo se usa el timeout
        setTimeout(() => {
            gifContenedor.innerHTML = ""; // Borramos el contenido del contenedor
        }, 2000); // El GIF desaparecerá después de 2 segundos (2000 milisegundos)
    });
});

