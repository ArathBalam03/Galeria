document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    const url = document.getElementById("urlImagen").value;
    const desc = document.getElementById("descripcion").value;
    agregarImagen(url, desc);
    document.getElementById("formulario").reset();
});

function agregarImagen(url, descripcion) {
    const galeria = document.getElementById("galeria");
    const div = document.createElement("div");
    div.classList.add("imagen");
    div.innerHTML = `
        <img src="${url}" alt="Imagen">
        <p class="descripcion" onclick="cambiarDescripcion(this)">${descripcion}</p>
        <button class="eliminar" onclick="eliminarImagen(this)">X</button>
    `;
    galeria.appendChild(div);
}

function eliminarImagen(boton) {
    boton.parentElement.remove();
}

function cambiarDescripcion(parrafo) {
    const nuevaDesc = prompt("Nueva descripción:", parrafo.textContent);
    if (nuevaDesc) {
        parrafo.textContent = nuevaDesc;
    }
}