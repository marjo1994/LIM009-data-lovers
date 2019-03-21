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
  pokemonOrder =dataPokemon.sort((a, b) => (a.name > b.name ? 1 : -1)).reverse();
}else{
  pokemonOrder =dataPokemon.sort((a, b) => (a.avg_spawns > b.avg_spawns ? 1 : -1)).reverse();
}
break;
default:
}
return pokemonOrder;
};

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




window.sorData = sorData;
window.selectUniqueTypes = selectUniqueTypes;
//como me aseguro que el array original no e

/*

 dataPokemon1 = window.POKEMON.pokemon;

let tipos =[];
dataPokemon1.map((element) => {
  
  element.type.forEach((tipo1)=>{
    tipos.push(tipo1);
  });
});
const distintos =[...new Set(tipos)];

console.log (distintos);


const dataPokemon1 = window.POKEMON;

window.dataPokemon1 ={
  filtrado:(typeSelected)=>{
    let newTypeArray = pokemon.filter((objeto)=>{
return (objeto.type ===typeSelected);
    });
    console.log(newTypeArray);
    
  return newTypeArray;
  }
};
*/
//copiar map 




































