global.window = global;
require('../src/data');
require('./data.spec.js');

const dataTest = {
  "pokemon": [{
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.71 m",
    "weight": "6.9 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.69,
    "avg_spawns": 69,
    "spawn_time": "20:00",
    "multipliers": [1.58],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "002",
      "name": "Ivysaur"
    }, {
      "num": "003",
      "name": "Venusaur"
    }]
  }, {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.99 m",
    "weight": "13.0 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.042,
    "avg_spawns": 4.2,
    "spawn_time": "07:00",
    "multipliers": [
      1.2,
      1.6
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "001",
      "name": "Bulbasaur"
    }],
    "next_evolution": [{
      "num": "003",
      "name": "Venusaur"
    }]
  }, {
    "id": 3,
    "num": "003",
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "2.01 m",
    "weight": "100.0 kg",
    "candy": "Bulbasaur Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "11:30",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "001",
      "name": "Bulbasaur"
    }, {
      "num": "002",
      "name": "Ivysaur"
    }]
  }, {
    "id": 4,
    "num": "004",
    "name": "Charmander",
    "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
    "type": [
      "Fire"
    ],
    "height": "0.61 m",
    "weight": "8.5 kg",
    "candy": "Charmander Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.253,
    "avg_spawns": 25.3,
    "spawn_time": "08:45",
    "multipliers": [1.65],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "next_evolution": [{
      "num": "005",
      "name": "Charmeleon"
    }, {
      "num": "006",
      "name": "Charizard"
    }]
  }]
};
const arrdataTest = dataTest.pokemon;

const testNameAsc = [{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.71 m",
  "weight": "6.9 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.69,
  "avg_spawns": 69,
  "spawn_time": "20:00",
  "multipliers": [1.58],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "next_evolution": [{
    "num": "002",
    "name": "Ivysaur"
  }, {
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 4,
  "num": "004",
  "name": "Charmander",
  "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
  "type": [
    "Fire"
  ],
  "height": "0.61 m",
  "weight": "8.5 kg",
  "candy": "Charmander Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.253,
  "avg_spawns": 25.3,
  "spawn_time": "08:45",
  "multipliers": [1.65],
  "weaknesses": [
    "Water",
    "Ground",
    "Rock"
  ],
  "next_evolution": [{
    "num": "005",
    "name": "Charmeleon"
  }, {
    "num": "006",
    "name": "Charizard"
  }]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.99 m",
  "weight": "13.0 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.042,
  "avg_spawns": 4.2,
  "spawn_time": "07:00",
  "multipliers": [
    1.2,
    1.6
  ],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }],
  "next_evolution": [{
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 3,
  "num": "003",
  "name": "Venusaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "2.01 m",
  "weight": "100.0 kg",
  "candy": "Bulbasaur Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.017,
  "avg_spawns": 1.7,
  "spawn_time": "11:30",
  "multipliers": null,
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }, {
    "num": "002",
    "name": "Ivysaur"
  }]
}];

const testNameDesc = [{
  "id": 3,
  "num": "003",
  "name": "Venusaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "2.01 m",
  "weight": "100.0 kg",
  "candy": "Bulbasaur Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.017,
  "avg_spawns": 1.7,
  "spawn_time": "11:30",
  "multipliers": null,
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }, {
    "num": "002",
    "name": "Ivysaur"
  }]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.99 m",
  "weight": "13.0 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.042,
  "avg_spawns": 4.2,
  "spawn_time": "07:00",
  "multipliers": [
    1.2,
    1.6
  ],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }],
  "next_evolution": [{
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 4,
  "num": "004",
  "name": "Charmander",
  "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
  "type": [
    "Fire"
  ],
  "height": "0.61 m",
  "weight": "8.5 kg",
  "candy": "Charmander Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.253,
  "avg_spawns": 25.3,
  "spawn_time": "08:45",
  "multipliers": [1.65],
  "weaknesses": [
    "Water",
    "Ground",
    "Rock"
  ],
  "next_evolution": [{
    "num": "005",
    "name": "Charmeleon"
  }, {
    "num": "006",
    "name": "Charizard"
  }]
}, {
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.71 m",
  "weight": "6.9 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.69,
  "avg_spawns": 69,
  "spawn_time": "20:00",
  "multipliers": [1.58],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "next_evolution": [{
    "num": "002",
    "name": "Ivysaur"
  }, {
    "num": "003",
    "name": "Venusaur"
  }]
}];

const testAvgSpawnsAsc = [{
  "id": 3,
  "num": "003",
  "name": "Venusaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "2.01 m",
  "weight": "100.0 kg",
  "candy": "Bulbasaur Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.017,
  "avg_spawns": 1.7,
  "spawn_time": "11:30",
  "multipliers": null,
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }, {
    "num": "002",
    "name": "Ivysaur"
  }]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.99 m",
  "weight": "13.0 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.042,
  "avg_spawns": 4.2,
  "spawn_time": "07:00",
  "multipliers": [
    1.2,
    1.6
  ],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }],
  "next_evolution": [{
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 4,
  "num": "004",
  "name": "Charmander",
  "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
  "type": [
    "Fire"
  ],
  "height": "0.61 m",
  "weight": "8.5 kg",
  "candy": "Charmander Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.253,
  "avg_spawns": 25.3,
  "spawn_time": "08:45",
  "multipliers": [1.65],
  "weaknesses": [
    "Water",
    "Ground",
    "Rock"
  ],
  "next_evolution": [{
    "num": "005",
    "name": "Charmeleon"
  }, {
    "num": "006",
    "name": "Charizard"
  }]
}, {
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.71 m",
  "weight": "6.9 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.69,
  "avg_spawns": 69,
  "spawn_time": "20:00",
  "multipliers": [1.58],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "next_evolution": [{
    "num": "002",
    "name": "Ivysaur"
  }, {
    "num": "003",
    "name": "Venusaur"
  }]
}];


const testAvgSpawnsDesc = [{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.71 m",
  "weight": "6.9 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.69,
  "avg_spawns": 69,
  "spawn_time": "20:00",
  "multipliers": [1.58],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "next_evolution": [{
    "num": "002",
    "name": "Ivysaur"
  }, {
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 4,
  "num": "004",
  "name": "Charmander",
  "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
  "type": [
    "Fire"
  ],
  "height": "0.61 m",
  "weight": "8.5 kg",
  "candy": "Charmander Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.253,
  "avg_spawns": 25.3,
  "spawn_time": "08:45",
  "multipliers": [1.65],
  "weaknesses": [
    "Water",
    "Ground",
    "Rock"
  ],
  "next_evolution": [{
    "num": "005",
    "name": "Charmeleon"
  }, {
    "num": "006",
    "name": "Charizard"
  }]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.99 m",
  "weight": "13.0 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.042,
  "avg_spawns": 4.2,
  "spawn_time": "07:00",
  "multipliers": [
    1.2,
    1.6
  ],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }],
  "next_evolution": [{
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 3,
  "num": "003",
  "name": "Venusaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "2.01 m",
  "weight": "100.0 kg",
  "candy": "Bulbasaur Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.017,
  "avg_spawns": 1.7,
  "spawn_time": "11:30",
  "multipliers": null,
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }, {
    "num": "002",
    "name": "Ivysaur"
  }]
}];
const testUniqueTypes = ["Grass", "Poison", "Fire"];
const testFilterbyFire = [{
  "id": 4,
  "num": "004",
  "name": "Charmander",
  "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
  "type": [
    "Fire"
  ],
  "height": "0.61 m",
  "weight": "8.5 kg",
  "candy": "Charmander Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.253,
  "avg_spawns": 25.3,
  "spawn_time": "08:45",
  "multipliers": [1.65],
  "weaknesses": [
    "Water",
    "Ground",
    "Rock"
  ],
  "next_evolution": [{
    "num": "005",
    "name": "Charmeleon"
  }, {
    "num": "006",
    "name": "Charizard"
  }]
}];
const testFilterbyGrass = [{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.71 m",
  "weight": "6.9 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.69,
  "avg_spawns": 69,
  "spawn_time": "20:00",
  "multipliers": [1.58],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "next_evolution": [{
    "num": "002",
    "name": "Ivysaur"
  }, {
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.99 m",
  "weight": "13.0 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.042,
  "avg_spawns": 4.2,
  "spawn_time": "07:00",
  "multipliers": [
    1.2,
    1.6
  ],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }],
  "next_evolution": [{
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 3,
  "num": "003",
  "name": "Venusaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "2.01 m",
  "weight": "100.0 kg",
  "candy": "Bulbasaur Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.017,
  "avg_spawns": 1.7,
  "spawn_time": "11:30",
  "multipliers": null,
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }, {
    "num": "002",
    "name": "Ivysaur"
  }]
}];
describe('sorData', () => {
  test('debería ser una función', () => {
    expect(typeof sorData).toBe('function');
  });
  test('debería retornar un array para sorData(arrdataTest,"name","ASC")', () => {
    expect(typeof(sorData(arrdataTest, 'name', 'ASC'))).toBe('object');
  }); 
  test('debería retornar testNameAsc para sorData(arrdataTest,"name","ASC")', () => {
    expect(sorData(arrdataTest, 'name', 'ASC')).toEqual(testNameAsc);
  }); 
  test('debería retornar un array para sorData(arrdataTest,"name","DESC")', () => {
    expect(typeof(sorData(arrdataTest, 'name', 'DESC'))).toBe('object');
  });
  test('debería retornar testNameDesc para sorData(arrdataTest,"name","DESC")', () => {
    expect(sorData(arrdataTest, 'name', 'DESC')).toEqual(testNameDesc);
  }); 
  test('deberia retornar un array para sorData(arrdataTest,"avg_spawns","ASC")', () => {
    expect(typeof(sorData(arrdataTest, 'avg_spawns', 'ASC'))).toBe('object');
  });   
  test('deberia retornar testAvgSpawns para sorData(arrdataTest,"avg_spawns","ASC")', () => {
    expect(sorData(arrdataTest, 'avg_spawns', 'ASC')).toEqual(testAvgSpawnsAsc);
  });
  test('deberia retornar un array para sorData(arrdataTest,"avg_spawns","DESC")', () => {
    expect(typeof(sorData(arrdataTest, 'avg_spawns', 'DESC'))).toBe('object');
  });
  test('deberia retornar testAvgSpawns para sorData(arrdataTest,"avg_spawns","DESC")', () => {
    expect(sorData(arrdataTest, 'avg_spawns', 'DESC')).toEqual(testAvgSpawnsDesc);
  });  
});

describe('selectUniqueTypes', () => {
  test('debería ser una función', () => {
    expect(typeof selectUniqueTypes).toBe('function');
  });
  test('debería retornar un array para selectUniqueTypes(arrdataTest)', () => {
    expect(typeof(selectUniqueTypes(arrdataTest))).toBe('object');
  }); 
  test('debería retornar testUniqueTypes para selectUniqueTypes(arrdataTest)', () => {
    expect(selectUniqueTypes(arrdataTest)).toEqual(testUniqueTypes);
  }); 
});

describe('filterBy', () => {
  test('debería ser una función', () => {
    expect(typeof filterBy).toBe('function');
  });
  test('debería retornar un array para testFilterbyFire', () => {
    expect(typeof(filterBy(arrdataTest, 'Grass'))).toBe('object');
  });
  test('debería retornar testFilterbyFire para filterBy(arrdataTest, "Fire")', () => {
    expect(filterBy(arrdataTest, 'Fire')).toEqual(testFilterbyFire);
  }); 
  test('debería retornar un array para testFilterbyGrass ', () => {
    expect(typeof(filterBy(arrdataTest, 'Grass'))).toBe('object');
  });
  test('debería retornar testFilterbyGrass para filterBy(arrdataTest, "Grass")', () => {
    expect(filterBy(arrdataTest, 'Grass')).toEqual(testFilterbyGrass);
  }); 
});

describe('computeAvgSpawns', () => {
  test('debería ser una función', () => {
    expect(typeof computeAvgSpawns).toBe('function');
  }); 
  test('deberia retornar un numero cuando selecciones Max', () => {
    expect(typeof(computeAvgSpawns(arrdataTest, 'Max'))).toBe('number');
  }); 
  test('deberia retornar 69 para computeAvgSpawns(arrdataTest,"Max")', () => {
    expect(computeAvgSpawns(arrdataTest, 'Max')).toEqual(69);
  });
  test('deberia retornar un numero cuando seleccione Min', () => {
    expect(typeof(computeAvgSpawns(arrdataTest, 'Min'))).toBe('number');
  });
  test('deberia retornar 1.7 para computeAvgSpawns(arrdataTest,"Min")', () => {
    expect(computeAvgSpawns(arrdataTest, 'Min')).toEqual(1.7);
  }); 
  test('deberia retornar un numero para el promedio', () => {
    expect(typeof(computeAvgSpawns(arrdataTest, 'Promedio'))).toBe('number');
  }); 
  test('deberia retornar 25.05 para computeAvgSpawns(arrdataTest,"Promedio")', () => {
    expect(computeAvgSpawns(arrdataTest, 'Promedio')).toEqual(25);
  }); 
});

describe('displayTypesOfPokemon', () => {
  test('debería ser una función', () => {
    expect(typeof computeCountTypePokemons).toBe('function');
  }); 
  test('debería retornar un array', () => {
    expect(typeof(computeCountTypePokemons(arrdataTest, selectUniqueTypes(arrdataTest)))).toBe('object');
  });
  test('debería retornar  para computeCountTypePokemons(arrdataTest,uniqueTypes)', () => {
    expect(computeCountTypePokemons(arrdataTest, selectUniqueTypes(arrdataTest))).toEqual(["Grass  3", "Poison  3", "Fire  1"]);
  });
});

