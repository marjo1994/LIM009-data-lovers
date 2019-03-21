
const sorData =(dataPokemon, sortBy, sortOrder) =>{
let pokemonOrder =[];
switch (sortOrder){
case 'ASC':
    if (sortBy==='name'){
      pokemonOrder =dataPokemon.sort((a, b) => (a.name > b.name ? 1 : -1));

}else{
      pokemonOrder =dataPokemon.sort((a, b) => (a.avg_spawns > b.avg_spawns ? 1 : -1));
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

//Obtener un array de tipos de pokemones

const selectUniqueTypes = (data) => {
  let tipos =[];
  data.map((obj) => {
  obj.type.forEach((string)=>{
    tipos.push(string);
  });
});
const distintos =[...new Set(tipos)];
  return distintos
}

window.selectUniqueTypes = selectUniqueTypes;


const filterBy = (data,condition) => {
  const filterbytype = data.filter(element => {
    return element.type.indexOf(condition) > -1
})
};
