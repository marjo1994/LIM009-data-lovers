/* Manejo del DOM */

const dataPokemon = window.POKEMON.pokemon;

document.getElementById("names").innerHTML =`${dataPokemon.map( (dataPokemon) => {
    return `Nombre: ${dataPokemon.name}
    <br> Altura: ${dataPokemon.height}
    <br> Peso: ${dataPokemon.weight}
    <br> N°apariciones/10,000 : ${dataPokemon.avg_spawns} veces
    <br> Hora probable para encontrarlo: ${dataPokemon.spawn_time}
    <br><br>
    `;
}).join('')}`;






