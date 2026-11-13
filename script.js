
// =================================
// INFORMACIÓN DE LOS SERVICIOS
// =================================

const servicios = [

    {
        numero: "SERVICIO 01",
        titulo: "Nombre del servicio 01",
        descripcion: "Aquí colocaremos la descripción del primer servicio de C.A.P."
    },

    {
        numero: "SERVICIO 02",
        titulo: "Nombre del servicio 02",
        descripcion: "Aquí colocaremos la descripción del segundo servicio de C.A.P."
    },

    {
        numero: "SERVICIO 03",
        titulo: "Nombre del servicio 03",
        descripcion: "Aquí colocaremos la descripción del tercer servicio de C.A.P."
    }

];


// =================================
// SELECCIÓN DE PESTAÑAS
// =================================

const botones = document.querySelectorAll(".service-tab");

const numero = document.getElementById("service-number");
const titulo = document.getElementById("service-title");
const texto = document.getElementById("service-text");

const panel = document.getElementById("service-panel");


// =================================
// FUNCIÓN PARA CAMBIAR EL SERVICIO
// =================================

function mostrarServicio(indice) {

        panel.classList.remove("is-changing");

    void panel.offsetWidth;

    panel.classList.add("is-changing");

    const servicio = servicios[indice];

    // Actualizar información

    numero.textContent = servicio.numero;
    titulo.textContent = servicio.titulo;
    texto.textContent = servicio.descripcion;

    // Actualizar pestañas

    botones.forEach((boton, posicion) => {

        const seleccionado = posicion === indice;

        boton.classList.toggle(
            "active",
            seleccionado
        );

        boton.setAttribute(
            "aria-selected",
            seleccionado
        );

        boton.tabIndex = seleccionado ? 0 : -1;

    });

    panel.setAttribute(
        "aria-labelledby",
        botones[indice].id
    );

}


// =================================
// EVENTOS DE LOS BOTONES
// =================================

botones.forEach((boton, indice) => {

    boton.addEventListener("click", () => {

        mostrarServicio(indice);

    });

});


// =================================
// GALERÍA DESLIZABLE
// =================================

const galleryTrack = document.getElementById(
    "gallery-track"
);

const galleryNext = document.getElementById(
    "gallery-next"
);

const galleryPrev = document.getElementById(
    "gallery-prev"
);


// AVANZAR FOTOGRAFÍAS

galleryNext.addEventListener("click", () => {

    const desplazamiento =
        galleryTrack.querySelector(".gallery-item").offsetWidth + 20;

    galleryTrack.scrollBy({
        left: desplazamiento,
        behavior: "smooth"
    });

});


// RETROCEDER FOTOGRAFÍAS

galleryPrev.addEventListener("click", () => {

    const desplazamiento =
        galleryTrack.querySelector(".gallery-item").offsetWidth + 20;

    galleryTrack.scrollBy({
        left: -desplazamiento,
        behavior: "smooth"
    });

});