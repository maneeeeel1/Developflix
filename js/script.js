import peliculas from './peliculas.js'
const URL_BASE_IMAGE ="https://image.tmdb.org/t/p/w500";



function cargarPelis(){

    peliculas.forEach(pelicula =>{
        pelicula.genre_ids.forEach(genero =>{
            const contenedor = document.getElementById(`genero-${genero}`);
            if (contenedor){
                const peligenero = document.createElement("div");
                peligenero.classList.add("pelicula");
                peligenero.innerHTML=`<img src="${URL_BASE_IMAGE}${pelicula.poster_path}">
                <p>${pelicula.original_title}</p>`;

                contenedor.appendChild(peligenero);
            }

        });
    });
}


document.addEventListener("DOMContentLoaded", cargarPelis);