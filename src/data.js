//Función para ordenar los pokemones por nombre y N Apariciones promedio
//De manera ascedente y descendente

const sorData =(dataPokemon, sortBy, sortOrder) => {
let pokemonOrder =[];
switch (sortOrder){
case 'ASC':
    if (sortBy==='name'){
      pokemonOrder = dataPokemon.sort((a, b) => (a.name > b.name ? 1 : -1));

}else{
      pokemonOrder = dataPokemon.sort((a, b) => (a.avg_spawns > b.avg_spawns ? 1 : -1));
}
break;

case 'DESC':
if (sortBy==='name'){
  pokemonOrder =dataPokemon.sort((a, b) => (a.name < b.name ? 1 : -1));
}else{
  pokemonOrder =dataPokemon.sort((a, b) => (a.avg_spawns < b.avg_spawns ? 1 : -1));
}
break;
default:
}
return pokemonOrder;
};

window.sorData = sorData;

//Obtener un array de tipos de pokemones sin duplicados

const selectUniqueTypes = (data) => {
  let tipos =[];
  data.forEach((obj) => {
  obj.type.forEach((string)=>{
    tipos.push(string);
  });
});
const distintos =[...new Set(tipos)];
  return distintos
}

window.selectUniqueTypes = selectUniqueTypes;

//Función para filtrar los pokemones por tipos

const filterBy = (data, condition) => {
  const filterbytype = data.filter(element => {
    for(let i=0;i<element.type.length;i++){
      if(element.type[i] === condition){
        return 1;
      }
    }
    })
  return filterbytype;
};

window.filterBy =filterBy;

const computeAvgSpawns = (arr,option) => {
  let arrAvgSpawns =[];
  for (let i=0; i<arr.length; i++) {
    arrAvgSpawns.push(arr[i].avg_spawns);
  }

  if(option === 'Max') {
  return  Math.max.apply(null,arrAvgSpawns);
  } else{
  return  Math.mix.apply(null,arrAvgSpawns);
  }
 }

 window.computeAvgSpawns = computeAvgSpawns;
