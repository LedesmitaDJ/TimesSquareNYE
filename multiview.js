// Función para agregar un reproductor multimedia al contenedor con un título
function agregarReproductor(url, titulo, ancho, alto) {
    const contenedor = document.createElement("div");
    contenedor.className = "media-player";

    const tituloElement = document.createElement("h2");
    tituloElement.textContent = titulo;
    contenedor.appendChild(tituloElement);

    const reproductor = document.createElement("iframe");
    reproductor.src = url;
    reproductor.width = ancho; // Establecer ancho
    reproductor.height = alto; // Establecer alto
    contenedor.appendChild(reproductor);

    document.getElementById("multiview-container").appendChild(contenedor);
}

// Ejemplos de uso
agregarReproductor("https://www.youtube.com/embed/UVftxDFol90", "Times Square 4K View", "426", "240");
agregarReproductor("Ball-Cam-1.html", "Ball Cam 1", "426", "240");
agregarReproductor("Ball-Cam-2.html", "Ball Cam 2", "426", "240");
agregarReproductor("https://www.youtube.com/embed/PmZUhF83ooA", "Duffy Square 4K View", "426", "240");
agregarReproductor("https://www.youtube.com/embed/2CsNM3354w4", "Express View", "426", "240");
agregarReproductor("https://www.youtube.com/embed/VSSHILnbfyw", "1515 Broadway View", "426", "240");
agregarReproductor("https://www.youtube.com/embed/GKxFrvv7avk", "1540 Broadway View", "426", "240");
agregarReproductor("https://www.youtube.com/embed/4qyZLflp-sI", "1560 Broadway View", "426", "240");
agregarReproductor("https://livestream.com/accounts/888332/events/931293/player", "Nasdaq View", "426", "240");
agregarReproductor("https://share.earthcam.net/tJ90CoLmq7TzrY396Yd88A4kdLdbDd6oQl5D9Ktzt8U!/times_square_locations/billboard_view/live", "Billboard View", "426", "240");
// Puedes ajustar los tamaños según tus necesidades