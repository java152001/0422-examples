var pokemon = ["Bulbasaur", "Squirtle", "Charmander"];

// pokemon.forEach(printPokemon)

var newPokemon = pokemon.map(function (pokemon, index) {
    return (pokemon + " is the " + (index + 1) + " in the list");
}).forEach(printPokemon)

// console.log(pokemon);
// console.log(newPokemon);

function printPokemon (pokemon, index) {
    console.log(pokemon)
}