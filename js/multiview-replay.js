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
agregarReproductor("https://livestream.com/accounts/43923/events/10381259/player", "", "426", "240");
agregarReproductor("https://livestream.com/accounts/43923/events/9872713/player", "", "426", "240");
agregarReproductor("https://livestream.com/accounts/43923/events/9392703/player", "", "426", "240");
agregarReproductor("https://livestream.com/accounts/43923/events/8713964/player", "", "426", "240");
agregarReproductor("https://livestream.com/accounts/43923/events/8452766/player", "", "426", "240");
agregarReproductor("https://livestream.com/accounts/43923/events/7957123/player", "", "426", "240");
agregarReproductor("https://livestream.com/accounts/43923/events/6612528/player", "", "426", "240");
agregarReproductor("https://livestream.com/accounts/43923/events/4458714/player", "", "426", "240");
agregarReproductor("https://www.youtube.com/embed/91Zf67HuaO4", "", "426", "240");
agregarReproductor("https://livestream.com/accounts/43923/events/1780083/player", "", "426", "240");
agregarReproductor("https://livestream.com/accounts/43923/events/1673924/player", "", "426", "240");
agregarReproductor("https://livestream.com/accounts/43923/events/389/player", "", "426", "240");
// Puedes agregar más reproductores según tus necesidades

// Personaliza los estilos y la disposición según tus preferencias