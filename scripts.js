document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");

    if (username === "admin" && password === "1234") {
        modalMessage.textContent = "Inicio de sesión exitoso";
    } else {
        modalMessage.textContent = "Usuario o contraseña incorrectos";
    }

    // Mostrar el modal
    modal.style.display = "flex";

    // Cerrar el modal al hacer clic en el botón "Aceptar"
    document.getElementById("modal-close").addEventListener("click", function() {
        modal.style.display = "none";
    });
});
