// Función para mostrar el banner de cookies
function mostrarBanner() {
    var banner = document.getElementById("cookieBanner");
    banner.style.display = "block";
}

// Función para aceptar las cookies y ocultar el banner
function aceptarCookies() {
    var banner = document.getElementById("cookieBanner");
    banner.style.display = "none";

    // Aquí podrías agregar lógica adicional para manejar las cookies, por ejemplo, establecer una cookie de aceptación.
}

// Mostrar el banner cuando la página se carga
window.onload = mostrarBanner;
