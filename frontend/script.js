document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const usuario = document.getElementById("usuario").value;
            const password = document.getElementById("password").value;
            alert(`Usuario: ${usuario}, Contraseña: ${password}`);
        });
    }

    const listaLibros = document.getElementById("listaLibros");
    if (listaLibros) {
        // Simulación de datos
        const libros = [
            { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", genero: "Realismo Mágico" },
            { titulo: "1984", autor: "George Orwell", genero: "Distopía" },
            { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", genero: "Fábula" }
        ];

        libros.forEach(libro => {
            const li = document.createElement("li");
            li.textContent = `${libro.titulo} - ${libro.autor} [${libro.genero}]`;
            listaLibros.appendChild(li);
        });
    }
});
