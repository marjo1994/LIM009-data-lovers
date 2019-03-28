/* Manejo del DOM */
const dataPokemon = POKEMON.pokemon;
const cardsContainer = document.getElementById('cards');
const orderNameAsc = document.getElementById('ordsname-a');
const orderNameDes = document.getElementById('ordsname-d');
const orderAvgSpawnsAsc = document.getElementById('ordspawn-a');
const orderAvgSpawnsDes = document.getElementById('ordspawn-d');
const typeOf = document.getElementById('type');
const maxAvg = document.getElementById('max-avg');
const minAvg = document.getElementById('min-avg');
const averageSpawns = document.getElementById('Promedio');
const displayCountTypesOfPokemon = document.getElementById('display-types');

const displayCards = (data) => { /* mostrar los datos de pokemones en pantalla*/
  let string = '';
  for (let i = 0; i < data.length; i++) {
    string += `
      <div class="card">
          <p class="name-pokemon">${data[i].name}</p>
          <img class="card-img" src="${data[i].img}" alt="imagen de ${data[i].name}">
          <p> Altura: ${data[i].height}</p>
          <p> Peso: ${data[i].weight}</p>
          <p> N°apariciones/10,000 : ${data[i].avg_spawns} veces</p>
          <p> Hora probable para encontrarlo: ${data[i].spawn_time}</p>
          <p> Tipos: ${data[i].type}</p>
      </div>
      `;
  }
  return cardsContainer.innerHTML = string;
};
displayCards(dataPokemon);

orderNameAsc.addEventListener('click', () => { /*  Ordenado ascendente por nombre*/
  displayCards(sorData(dataPokemon, 'name', 'ASC'));
});
orderNameDes.addEventListener('click', () => { /* Ordenado descendente por nombre*/
  displayCards(sorData(dataPokemon, 'name', 'DESC'));
});
orderAvgSpawnsAsc.addEventListener('click', () => { /*  Ordenado ascendente por N° de Apariciones*/
  displayCards(sorData(dataPokemon, 'avg_spawns', 'ASC'));
});
orderAvgSpawnsDes.addEventListener('click', () => { /*  Ordenado descendente por N° de Apariciones*/
  displayCards(sorData(dataPokemon, 'avg_spawns', 'DESC'));
});

const displaySelectTypesOfPokemon = (types) => { /* Cargar tipos de Pokemones en select*/
  let string = ' ';
  for (let i in types) {
    string += `<option value="${types[i]}">${types[i]} </option>`;
  }
  return typeOf.innerHTML = string;
};

displaySelectTypesOfPokemon(selectUniqueTypes(dataPokemon));

const onSelectType = () => { /* funcion que muestra pokemones segun su tipo*/
  let selectedOption = typeOf[typeOf.selectedIndex].value;
  return displayCards(filterBy(dataPokemon, selectedOption));
};
typeOf.addEventListener('change', onSelectType);

/*  Mostrar Maximo,mínimo y promedio del n° de apariciones*/
maxAvg.innerHTML = computeAvgSpawns(dataPokemon, 'Max');
minAvg.innerHTML = computeAvgSpawns(dataPokemon, 'Min');
averageSpawns.innerHTML = computeAvgSpawns(dataPokemon, 'Promedio');

const displayTypesOfPokemon = (types) => {
  let string = ' ';
  for (let i in types) {
    string += `<p>${types[i]}</p>`;
  }
  return displayCountTypesOfPokemon.innerHTML = string;
};

displayTypesOfPokemon(computeCountTypePokemons(dataPokemon, selectUniqueTypes(dataPokemon)));
