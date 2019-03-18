/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

//Ordenar por N°Apariciones

const Asc = (a,b)=> {
  return a.avg_spawns - b.avg_spawns
}
const Desc =(a,b)=>{
  return b.avg_spawns - a.avg_spawns
}
const sorDatabySpawnsA = (dataPokemon,Asc) => {
  dataPokemon.sort(Asc)  
};
window.sorDatabySpawnsA = sorDatabySpawnsA;
const sorDatabySpawnsD = (dataPokemon,Desc) => {
  dataPokemon.sort(Desc)  
};
window.sorDatabySpawnsD = sorDatabySpawnsD;


const prueba =datapokemon.sort();

const Prueba2;


