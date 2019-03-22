/* Manejo del DOM */
const dataPokemon = window.POKEMON.pokemon;

//Mostrar data en pantalla
const cardsContainer = document.getElementById("cards");

const displayCards = (data) => {
  let string = '';
  for (let i = 0; i <data.length; i++) {
    string += `
      <div>
        <div>
          <p> Nombre: ${data[i].name}</p>
          <p> Altura: ${data[i].height}</p>
          <p> Peso: ${data[i].weight}</p>
          <p> N°apariciones/10,000 : ${data[i].avg_spawns} veces</p>
          <p> Hora probable para encontrarlo: ${data[i].spawn_time}</p>
          <p> Tipos: ${data[i].type}</p>
        </div>
        <img src="${data[i].img}" alt="imagen de ${data[i].name}">
      </div>
    `;
  }
  return cardsContainer.innerHTML = string;
}

displayCards(dataPokemon);

//Mostrar en pantalla Cards ordenadas por nombre
document.getElementById("ordsname-a").addEventListener("click",() => {
  displayCards(sorData(dataPokemon,'name','ASC'))
});

document.getElementById("ordsname-d").addEventListener("click",()=>{
    displayCards(sorData(dataPokemon,'name','DESC'))
});

//Mostrar en pantalla Cards ordenadas por N°Apariciones

document.getElementById("ordspawn-a").addEventListener("click",() => {
  displayCards(sorData(dataPokemon,'avg_spawns','ASC'))
});

document.getElementById("ordspawn-d").addEventListener("click",()=>{
  displayCards(sorData(dataPokemon,'avg_spawns','DESC'))
});

//Mostrar en pantalla tipos de Pokemones

const typeOf = document.getElementById("type");

const displaySelectTypesOfPokemon = (types) => {
  let string = ''
  for(let i in types) {
    string += `<option value="${types[i]}">${types[i]} </option>`;
  }
  return typeOf.innerHTML = string;
}

displaySelectTypesOfPokemon(selectUniqueTypes(dataPokemon));

// Click en el tipo de pokemon que el usuario desea filtrar

const onSelectType = () =>{
  let selectedOption = typeOf[typeOf.selectedIndex].value;
  return displayCards(filterBy(dataPokemon,selectedOption));

};

typeOf.addEventListener('change', onSelectType);
