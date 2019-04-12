const sorData = (data, sortBy, sortOrder) => {// Función para ordenar los pokemones por nombre y N Apariciones promedio
  let pokemonOrder = [];
  switch (sortOrder) {
  case 'ASC'://  Ordenar de manera ascedente 
    if (sortBy === 'name') {
      pokemonOrder = data.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      pokemonOrder = data.sort((a, b) => (a.avg_spawns > b.avg_spawns ? 1 : -1));
    } 
    break;

  case 'DESC':// Ordenar de manera descendente
    if (sortBy === 'name') {
      pokemonOrder = data.sort((a, b) => (a.name < b.name ? 1 : -1));
    } else {
      pokemonOrder = data.sort((a, b) => (a.avg_spawns < b.avg_spawns ? 1 : -1));
    }
    break;
  default:
  }
  return pokemonOrder;
};

window.sorData = sorData;

const selectUniqueTypes = (data) => { /*  Obtener un array de tipos de pokemones sin duplicados */
  let tipos = [];
  data.forEach((obj) => {
    obj.type.forEach((string) => {
      tipos.push(string);
    });
  });
  const distintos = [...new Set(tipos)];
  return distintos;
};

window.selectUniqueTypes = selectUniqueTypes;

const filterBy = (data, condition) => { /* Función para filtrar los pokemones por tipos */
  const filterbytype = data.filter(element => {
    for (let i = 0; i < element.type.length; i++) {
      if (element.type[i] === condition) {
        return 1;
      }
    }
  });
  return filterbytype;
};

window.filterBy = filterBy;

const computeAvgSpawns = (data, option) => { /* función para calcular max,min,promedio de avg-spawns */
  let arrAvgSpawns = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for (let i = 0; i < data.length; i++) {
    arrAvgSpawns.push(data[i].avg_spawns);
  }
  if (option === 'Max') {
    return Math.max.apply(null, arrAvgSpawns);
  } else if (option === 'Min') {
    return Math.min.apply(null, arrAvgSpawns);
  } else {
    return parseInt((arrAvgSpawns.reduce(reducer)) / data.length);
  }
};

window.computeAvgSpawns = computeAvgSpawns;

const computeCountTypePokemons = (data, type) => { /*  función para contar pokemones segun tipo  */
  let counTypePokemon = [];
  for (let i = 0; i < type.length; i++) {
    counTypePokemon.push([filterBy(data, type[i]).length, type[i]]);
  }
  return counTypePokemon;
};

window.computeCountTypePokemons = computeCountTypePokemons;