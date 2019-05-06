//update.js
const Pokemon = require('./models/pokemonModel');
const mongoose = require('mongoose');
require('dotenv').config();

// Use Promise
mongoose.Promise = global.Promise;

// Connect to mongoDB 
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOSTNAME}/${process.env.DB_NAME}?retryWrites=true`, { useNewUrlParser: true })
  .catch((err) => {
    console.error(`database connection error: ${err}`);
    process.exit();
  });

var db = mongoose.connection;
db.on('error', (err) => { console.error(`connection error:${err}`); });
console.log("connected!");

/*  Problem Set 1: Update a pokemon's name
       
    Pre-requisite: 
    1. You can use existing pokemons that you added to the database or run nested.js with a new pokemon data 
    var new_pokemon = new Pokemon({
        poke_id: 150,
        name: "Mewtwo",
        shiny_variant: false,
        gender: [{ female: false, male: false, genderless: true }],
        stats: [{ hp: 106, attack: 110, defense: 90 }]
    });

    Expected Result: The pokemon's name changed to Mega Mewto
*/

Pokemon.findOne({ 'name': 'Mewtwo' })
  .then((pokemon) => {
    // Add the new pokemon data that you want to update
    var data = {
      name: 'Mega Mewto',
      shiny_variant: true,
    }
    // Update the fields that are in the object literal above
    pokemon.set(data);
    // Save the data
    pokemon.save().then(() => {
      console.log("Pokemon updated succesfully!")
    });
  })
  .catch((err) => {
    if (err) console.log(err);
  });

/*  Problem Set 2: Update HP stats of a pokemon (nested value) using the object ID

    Expected Result: The pokemon's HP has been updated t0 107
*/
Pokemon.findByIdAndUpdate({ _id: '5ccf3a2ffeb78825a8c92558' }, { $set: { "stats.$[].hp": 107 } }, { new: true })
  .then((pokemon) => {
    console.log(pokemon);
  })
  .catch((err) => {
    if (err) console.log(err);
  });