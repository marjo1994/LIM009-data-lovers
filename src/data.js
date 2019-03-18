/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

let namesPokemon = [];

for(let i=0;i<POKEMON.pokemon.length;i++){
 namesPokemon.push(POKEMON.pokemon[i].name);
 }
const namesPokemonOrdered = namesPokemon.sort()

 console.log(namesPokemonOrdered);

// const deadBeforeSXX = inventors.filter(inventor => (inventor.passed < 1900));

//const filterbyTipe = POKEMON.pokemon.filter()
 




