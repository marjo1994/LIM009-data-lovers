const sorData = (dataPokemon, sortBy, sortOrder) => {// Función para ordenar los pokemones por nombre y N Apariciones promedio
  let pokemonOrder = [];
  switch (sortOrder) {
  case 'git':// De manera ascedente 
    if (sortBy === 'name') {
      pokemonOrder = dataPokemon.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      pokemonOrder = dataPokemon.sort((a, b) => (a.avg_spawns > b.avg_spawns ? 1 : -1));
    }
    break;

  case 'DESC':// De manera descendente
    if (sortBy === 'name') {
      pokemonOrder = dataPokemon.sort((a, b) => (a.name < b.name ? 1 : -1));
    } else {
      pokemonOrder = dataPokemon.sort((a, b) => (a.avg_spawns < b.avg_spawns ? 1 : -1));
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

const computeAvgSpawns = (arr, option) => { /* funcion para calcular max,min,promedio de avg-spawns */
  let arrAvgSpawns = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for (let i = 0; i < arr.length; i++) {
    arrAvgSpawns.push(arr[i].avg_spawns);
  }
  if (option === 'Max') {
    return Math.max.apply(null, arrAvgSpawns);
  } else if (option === 'Min') {
    return Math.min.apply(null, arrAvgSpawns);
  } else {
    return (arrAvgSpawns.reduce(reducer)) / arr.length;
  }
};

window.computeAvgSpawns = computeAvgSpawns;

const computeCountTypePokemons = (data, condition) => { /*  funcion para contar pokemones segun tipo  */
  let counTypePokemon = [];
  for (let i = 0; i < condition.length; i++) {
    counTypePokemon.push(condition[i] + '  ' + (filterBy(data, condition[i]).length));
  }
  return counTypePokemon;
};

window.computeCountTypePokemons = computeCountTypePokemons;

