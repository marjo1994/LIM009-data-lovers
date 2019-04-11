
let myRequest = new Request('https://marjo1994.github.io/LIM009-data-lovers/src/data/pokemon/pokemon.json');
let mostrar = () => {
  fetch(myRequest)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      console.log(data.pokemon);
    });
};

/* Manejo del DOM */
const cardsContainer = document.getElementById('cards');
const orderNameAsc = document.getElementById('ordsname-a');
const orderNameDes = document.getElementById('ordsname-d');
const orderAvgSpawnsAsc = document.getElementById('ordspawn-a');
const orderAvgSpawnsDes = document.getElementById('ordspawn-d');
const typeOf = document.getElementById('type');
const displayCountTypesOfPokemon = document.getElementById('display-types');

const displayCards = (data) => { /* mostrar los datos de pokemones en pantalla*/
  let string = '';
  for (let i = 0; i < data.length; i++) {
    string += `
      <div class="card">
          <p class="name-pokemon white">${data[i].name}</p>
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
displayCards(mostrar);

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

// eslint-disable-next-line no-unused-vars
function drawChart() {
  let data = google.visualization.arrayToDataTable([
    ["Element", "Cantidad de Aparición", { role: "style" } ],
    ["Maxima Aparición ", computeAvgSpawns(dataPokemon, 'Max'), "#b87333"],
    ["Minima Aparición ", computeAvgSpawns(dataPokemon, 'Min'), "silver"],
    ["Promedio N°Apariciones", computeAvgSpawns(dataPokemon, 'Promedio'), "gold"],
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
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  let chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);
}
