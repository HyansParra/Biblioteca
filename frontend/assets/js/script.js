document.addEventListener("DOMContentLoaded", () => {
    const listaLibros = document.getElementById("listaLibros");
    const busqueda = document.getElementById("busqueda");

    // Función para renderizar libros
    const renderizarLibros = (libros) => {
        listaLibros.innerHTML = "";
        libros.forEach(libro => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${libro.titulo}</strong> de ${libro.autor} (${libro.anio})<br><em>Género:</em> ${libro.genero} <br><em>Disponible:</em> ${libro.disponible ? "Sí" : "No"}`;
            listaLibros.appendChild(li);
        });
    };

    // Cargar libros desde el backend
    const cargarLibros = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/libros");
            const libros = await res.json();
            renderizarLibros(libros);

            if (busqueda) {
                busqueda.addEventListener("input", () => {
                    const texto = busqueda.value.toLowerCase();
                    const filtrados = libros.filter(libro =>
                        libro.titulo.toLowerCase().includes(texto) ||
                        libro.autor.toLowerCase().includes(texto) ||
                        libro.genero.toLowerCase().includes(texto)
                    );
                    renderizarLibros(filtrados);
                });
            }

        } catch (error) {
            listaLibros.innerHTML = "<li>Error al cargar los libros.</li>";
        }
    };

    if (listaLibros) {
        cargarLibros();
    }

    // Login ya existente
    const form = document.getElementById("loginForm");
    const mensaje = document.getElementById("mensaje");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const nombre = document.getElementById("usuario").value.trim();
            const contrasena = document.getElementById("password").value.trim();

            try {
                const response = await fetch("http://localhost:3000/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ nombre, contrasena })
                });

                const data = await response.json();

                if (!response.ok) {
                    mensaje.textContent = data.mensaje || "Error en el inicio de sesión";
                    mensaje.style.color = "red";
                    return;
                }

                mensaje.style.color = "green";
                mensaje.textContent = `¡Bienvenido, ${data.nombre}! Rol: ${data.rol}`;

            } catch (error) {
                mensaje.textContent = "Error al conectar con el servidor";
                mensaje.style.color = "red";
                console.error("Error:", error);
            }
        });
    }
});
