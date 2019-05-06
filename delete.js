//delete.js
const Pokemon = require('./models/pokemonModel');
require('dotenv').config();
const mongoose = require('mongoose');

// Use Promise
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOSTNAME}/${process.env.DB_NAME}?retryWrites=true`, { useNewUrlParser: true })
  .catch((err) => {
    console.error(`database connection error: ${err}`);
    process.exit();
  });

var db = mongoose.connection;
db.on('error', (err) => { console.error(`connection error:${err}`); });
console.log("connected!");

/*  Problem Set 1: Find a pokemon with an id and delete it

    Pre-requisite: 
    1. You can use existing pokemons that you added to the database or run node nested.js with the new pokemon data below.

    var new_pokemon = new Pokemon({
    poke_id: 2,
    name: "Ivysaur",
    shiny_variant: true,
    gender: [{ female: true, male: true, genderless: false }],
    stats: [{ hp: 60, attack: 62, defense: 63 }]
    });

    2. Get the object id
*/

// Use findOneAndDelete and id to delete the pokemon
  .then((pokemon) => {
    console.log(`Pokemon has been deleted`);
  })
  .catch((err) => {
    if (err) {
      console.log("There's an error deleting your pokemon!");
    };
  });