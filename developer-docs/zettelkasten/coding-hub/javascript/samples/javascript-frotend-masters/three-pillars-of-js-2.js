// import fetch from "node-fetch";

class Pokemon{
    constructor(){
        this._pokes = {};
    }
    
    set setPokemons(pokes){
        this._pokes = pokes;
    }

    getPokeId(id){
        return this._pokes[id];
    }

    toString(){
        return JSON.stringify(this._pokes);
    }
}

const DIR_NAME = "./";
const pokemon = new Pokemon();

const fs = require('fs');
const util = require('util');

// Convert fs.readFile into Promise version of same    
const readFile = util.promisify(fs.readFile);

function getPokemons() {
  return readFile(DIR_NAME + 'pokemon.json');
}

// Can't use `await` outside of an async function so you need to chain
// with then()
getPokemons().then((data) => {
  pokemon.setPokemons = JSON.parse(data);
  console.log(pokemon.toString());
  console.log(pokemon.getPokeId(1));
})
