//nested.js
const Pokemon = require('./models/pokemonModel');
require('dotenv').config();
const mongoose = require('mongoose');

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

// Add new pokemon data to new_pokemon variable
var new_pokemon = new Pokemon({
    poke_id: 1,
    name: "Bulbasaur",
    shiny_variant: true,
    gender: [{ female: true, male: true, genderless: false }],
    stats: [{ hp: 45, attack: 49, defense: 49 }]
});


// Problem Set 1: Add a new pokemon to the database
// Save the pokemon using the new pokemon data above 
    // If save is succesful, the below message message will be displayed
    .then((pokemon) => {
    console.log(`Added a pokemon into pokedex! ${pokemon}`);
})
    // Double check that you can find the pokemon that you saved
    .then(() => {
    // Find the pokemon that you added 
    .then((pokemon) => {
        console.log(`This is the pokemon that you added: ${pokemon}`);
    })
    // If save is not succesful, an error will be displayed.
    .catch((err) => { console.log(err) });
});
