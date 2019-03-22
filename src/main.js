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

const arr = selectUniqueTypes(dataPokemon);
const typeOf = document.getElementById("type")

const displaySelectTypesOfPokemon = (types) => {
  let string = ''
  for(let i in types) {
    string += `<option value="${types[i]}">${types[i]} </option>`;
  }
  return typeOf.innerHTML = string;
}

displaySelectTypesOfPokemon(arr);

document.getElementById("type").addEventListener('change', OnSelectType());

/*const OnSelectType = (select) =>{
let selectedOption=select.option[select.value];
if (selectedOption===condition){
  return displayCards(filterBy(dataPokemon,condition));
}
};*/

//displayCards(filterBy(dataPokemon,"Grass"));
