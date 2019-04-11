
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

// Set up data for visible chart.
let primaryData = [
  ['NBA Finals', 22.4],
  ['NFL Super Bowl', 111.3],
  ['MLB World Series', 19.2],
  ['UEFA Champions League Final', 1.9],
  ['NHL Stanley Cup Finals', 6.4],
  ['Wimbledon Men\'s Championship', 2.4]
];

// Set up data for your tooltips.
// let tooltipData = [
//   ['Year', 'NBA Finals', 'NFL Super Bowl', 'MLB World Series',
//     'UEFA Champions League Final', 'NHL Stanley Cup Finals',
//     'Wimbledon Men\'s Championship'],
//   ['2005', 12.5, 98.7, 25.3, 0.6, 3.3, 2.8],
//   ['2006', 13.0, 90.7, 17.1, 0.8, 2.8, 3.4],
//   ['2007', 9.3, 93.0, 15.8, 0.9, 1.8, 3.8],
//   ['2008', 14.9, 97.5, 17.1, 1.3, 4.4, 5.1],
//   ['2009', 14.3, 98.7, 13.6, 2.1, 4.9, 5.7],
//   ['2010', 18.2, 106.5, 19.4, 2.2, 5.2, 2.3],
//   ['2011', 17.4, 111.0, 14.3, 4.2, 4.6, 2.7],
//   ['2012', 16.8, 111.3, 16.6, 2.0, 2.9, 3.9],
//   ['2013', 16.6, 108.7, 12.7, 1.4, 5.8, 2.5],
//   ['2014', 15.7, 111.3, 15.0, 1.9, 4.7, 2.4]
// ]; 

let primaryOptions = {
  title: 'Highest U.S. Viewership for Most Recent Event (in millions)',
  legend: 'none',
  tooltip: {isHtml: true} // This MUST be set to true for your chart to show.
};

// let tooltipOptions = {
//   title: 'U.S. Viewership Over The Last 10 Years (in millions)',
//   legend: 'none'
// };

// Draws your charts to pull the PNGs for your tooltips.
// eslint-disable-next-line no-unused-vars

// function drawTooltipCharts() {
//   let data = new google.visualization.arrayToDataTable(tooltipData);
//   let view = new google.visualization.DataView(data);

//   // For each row of primary data, draw a chart of its tooltip data.
//   for (let i = 0; i < primaryData.length; i++) {
//     // Set the view for each event's data
//     view.setColumns([0, i + 1]);

//     let hiddenDiv = document.getElementById('hidden_div');
//     let tooltipChart = new google.visualization.LineChart(hiddenDiv);

//     google.visualization.events.addListener(tooltipChart, 'ready', function() {
//       // Get the PNG of the chart and set is as the src of an img tag.
//       let tooltipImg = '<img src="' + tooltipChart.getImageURI() + '">';

//       // Add the new tooltip image to your data rows.
//       primaryData[i][2] = tooltipImg;
//     });
//     tooltipChart.draw(view, tooltipOptions);
//   }
//   drawPrimaryChart();
// }

// eslint-disable-next-line no-unused-vars
function drawPrimaryChart() {
  let data = new google.visualization.DataTable();
  data.addColumn('string', 'Event');
  data.addColumn('number', 'Highest Recent Viewership');

  // Add a new column for your tooltips.
  data.addColumn({
    type: 'string',
    label: 'Tooltip Chart',
    role: 'tooltip',
    'p': {'html': true}
  });

  // Add your data (with the newly added tooltipImg).
  data.addRows(primaryData);

  let visibleDiv = document.getElementById('visible_div');
  let primaryChart = new google.visualization.ColumnChart(visibleDiv);
  primaryChart.draw(data, primaryOptions);
}

drawPrimaryChart();
