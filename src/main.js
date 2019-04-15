
let dataPokemon = [];
const getJson = (datajson) => {
  fetch(datajson)
    .then(response => response.json())
    .then(data => {
      return dataPokemon = Object.entries(data.pokemon);
    });
};
getJson('./data/pokemon/pokemon.json');


/* const getData = () => {
  fetch('./data/pokemon/pokemon.json')
    .then(pokemon => pokemon.json())
    .then(res => {
      displayCards(res.pokemon);
      displaySelectTypesOfPokemon(selectUniqueTypes(res.pokemon));
      displayTypesOfPokemon(computeCountTypePokemons(res.pokemon, selectUniqueTypes(res.pokemon)));
      
    });
};
getData();*/

/* Manejo del DOM */
// const dataPokemon = window.POKEMON.pokemon;
const cardsContainer = document.getElementById('cards');
const orderNameAsc = document.getElementById('ordsname-a');
const orderNameDes = document.getElementById('ordsname-d');
const orderAvgSpawnsAsc = document.getElementById('ordspawn-a');
const orderAvgSpawnsDes = document.getElementById('ordspawn-d');
const typeOf = document.getElementById('type');
const displayCountTypesOfPokemon = document.getElementById('display-types');

const displayCards = (data) => { /* mostrar los datos de pokemones en pantalla*/
  let string = ''; 
  data.forEach((obj) => {      
    string += `
      <div class="card">
          <p class="name-pokemon white">${obj.name}</p>
          <img class="card-img" src="${obj.img}" alt="imagen de ${obj.name}">
          <p> Altura: ${obj.height}</p>
          <p> Peso: ${obj.weight}</p>
          <p> N°apariciones/10,000 : ${obj.avg_spawns} veces</p>
          <p> Hora probable para encontrarlo: ${obj.spawn_time}</p>
          <p> Tipos: ${obj.type}</p>
      </div>
      `;
  });
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

const displayTypesOfPokemon = (types) => {
  let string = ' ';
  for (let i in types) {
    string += `<p>${types[i]}</p>`;
  }
  return displayCountTypesOfPokemon.innerHTML = string;
}; 

displayTypesOfPokemon(computeCountTypePokemons(dataPokemon, selectUniqueTypes(dataPokemon)));
/*
// eslint-disable-next-line no-unused-vars
function drawChart() {
  let data = google.visualization.arrayToDataTable([
    ["Element", "Cantidad de Aparición", { role: "style" } ],
    ["Maxima", computeAvgSpawns(dataPokemon, 'Max'), "#b87333"],
    ["Minima", computeAvgSpawns(dataPokemon, 'Min'), "silver"],
    ["Promedio", computeAvgSpawns(dataPokemon, 'Promedio'), "gold"],
  ]);
  let view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    { calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation" },
    2]);

  let options = {
    title: "Apariciones de todos los pokemones",
    bar: {groupWidth: "50%"},
    legend: { position: "bottom" },
  };
  let chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);
}

*/