/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

//sortData(dataPokemon2, sortBy, sortOrder);

const dataPokemon2 = window.POKEMON.pokemon;

const nombresOrdenados= dataPokemon2.sort((a,b)=> a< b ? a : b )   
console.log(nombresOrdenados);
/*
const nombresOrdenados2= dataPokemon2.sort((a,b)=>{

  if (a.name > b.name){
       return 1 ;
  }
  else if (a.name< b.name){
      return -1;
    }   
  else{
       return 0;
    }   
    
 }).reverse();

 console.log (nombresOrdenados2);



*/