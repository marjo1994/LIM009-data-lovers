/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

//Ordenar por N°Apariciones


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
  pokemonOrder =dataPokemon.sort((a, b) => (a.name < b.name ? 1 : -1))
}else{
  pokemonOrder =dataPokemon.sort((a, b) => (a.avg_spawns < b.avg_spawns ? 1 : -1))
}
break;
default:
}
return pokemonOrder;
}

window.sorData =sorData;




















