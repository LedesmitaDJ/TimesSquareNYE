document.addEventListener("DOMContentLoaded", function () {
    // Obtener el año actual
    const year = new Date().getFullYear();
    // Actualizar el contenido del elemento span con el año
    document.getElementById("year").textContent = year;
});