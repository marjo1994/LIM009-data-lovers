/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

//Ordenar por N°Apariciones

const sorDatabySpawns = (dataPokemon) => {
dataPokemon.sort(function(a, b){
  return a.avg_spawns - b.avg_spawns
});
};

window.sorDatabySpawns = sorDatabySpawns;


