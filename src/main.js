/* Manejo del DOM */
const dataPokemon = window.POKEMON.pokemon;
//Mostrar data en pantalla
let displayCards = () => {
        return document.getElementById("cards").innerHTML =
        `${dataPokemon.map( (dataPokemon) => {
            return `Nombre: ${dataPokemon.name}
            <br> Altura: ${dataPokemon.height}
            <br> Peso: ${dataPokemon.weight}
            <br> N°apariciones/10,000 : ${dataPokemon.avg_spawns} veces
            <br> Hora probable para encontrarlo: ${dataPokemon.spawn_time}
            <img src ="${dataPokemon.img}"/>
            <br><br>
            `;
        }).join('')}`;
    };
       
displayCards(dataPokemon);

//Mostrar en pantalla Cards ordenadas por N°Apariciones

document.getElementById("ordspawnA").addEventListener("click",() => {
    displayCards(sorDatabySpawnsA(dataPokemon,Asc));
    });


document.getElementById("ordspawnD").addEventListener("click",()=>{
    displayCards(sorDatabySpawnsD(dataPokemon,Desc));
});






