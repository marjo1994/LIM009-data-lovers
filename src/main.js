/* Manejo del DOM */
const dataPokemon = window.POKEMON.pokemon;
//Mostrar data en pantalla
const cardsContainer = document.getElementById("cards");

const displayCards = (data) => {
    let string = '';
    for(let i = 0; i <data.length; i++){
       string +=  `Nombre: ${data[i].name}
       <br> Altura: ${data[i].height}
       <br> Peso: ${data[i].weight}
       <br> N°apariciones/10,000 : ${data[i].avg_spawns} veces
       <br> Hora probable para encontrarlo: ${data[i].spawn_time}
       <br> Tipos: ${data[i].type}
       <br> <img src ="${data[i].img}"/>
       <br><br>`
    }

    return cardsContainer.innerHTML = string;
}

displayCards(dataPokemon);

//Mostrar en pantalla Cards ordenadas por nombre
document.getElementById("ordsnameA").addEventListener("click",() => {
    displayCards(sorData(dataPokemon,'name','ASC'))
    });

document.getElementById("ordsnameD").addEventListener("click",()=>{
    displayCards(sorData(dataPokemon,'name','DESC'))
});



//Mostrar en pantalla Cards ordenadas por N°Apariciones

document.getElementById("ordspawnA").addEventListener("click",() => {
    displayCards(sorData(dataPokemon,'avg_spawns','ASC'))
    });

document.getElementById("ordspawnD").addEventListener("click",()=>{
    displayCards(sorData(dataPokemon,'avg_spawns','DESC'))
});

//Mostrar en pantalla tipos de Pokemones

const displaySelectTypesOfPokemon = (types) => {
    let string = '';
    for(let i = 0; i < types.length; i++){
        string += ` <select>
        <option value="volvo"> ${types[i]}Volvo</option>
        <option value="saab">Saab</option>
        <option value="vw">VW</option>
        <option value="audi" selected>Audi</option>
      </select> `
    }
}
