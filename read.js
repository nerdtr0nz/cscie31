//read.js
const Pokemon = require('./models/pokemonModel');
require('dotenv').config();
const mongoose = require('mongoose');

// Use promise
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

/*  Problem Set 1: Find a pokemon that doesn't have a shiny variant
       
    Pre-requisite: 
    1. Run nested.js with a new pokemon data 
    var new_pokemon = new Pokemon({
        poke_id: 13,
        name: "Weedle",
        shiny_variant: false,
        gender: [{ female: true, male: true, genderless: false }],
        stats: [{ hp: 40, attack: 35, defense: 30 }]
    });
    2. Check MongoDB Compass GUI to see if you added Weedle to the database
    });
  
*/
Pokemon.find({})
  .then((pokemon) => {
    console.log(`Found a pokemon that doesn't have a shiny form! ${pokemon}`);
  })
  .catch((err) => {
    if (err) {
      console.log("There's an error retrieving your pokemon!");
    };
  });

/*  Problem Set 2: Find a pokemon that is genderless
       
    Pre-requisite: 
    1. Run nested.js with the below data 
    var new_pokemon = new Pokemon({
        poke_id: 384,
        name: "Rayquaza",
        shiny_variant: false,
        gender: [{ female: false, male: false, genderless: true }],
        stats: [{ hp: 105, attack: 150, defense: 90 }]
    });
    2. Check MongoDB Compass GUI to see if  you added Rayquaza to the database
    });
  
*/

// Add the parameter inside {}
Pokemon.find({})
  .then((pokemon) => {
    console.log(`Found a genderless pokemon! ${pokemon}`);
  })
  .catch((err) => {
    if (err) {
      console.log("There's an error retrieving your pokemon!");
    };
  });

//  Problem Set 3: Find a pokemon with hp (nested value) greater than 40

var hp = 40;

// Use 'where' and 'greater than' operator
  .then((pokemon) => {
    console.log(`Found a pokemon with hp greater than ${hp}! ${pokemon}`);
  })
  .catch((err) => {
    if (err) {
      console.log("There's an error retrieving your pokemon!");
    };
  });

//  Problem Set 4: Find a pokemon with attack equals to 150

var attack = 150;

// Use 'where' and 'equal to' operator 
  .then((pokemon) => {
    console.log(`Found a pokemon with attack of ${attack}! ${pokemon}`);
  })
  .catch((err) => {
    if (err) {
      console.log("There's an error retrieving your pokemon!");
    };
  });

//  Problem Set 5: Find a pokemon with defense less than equal to 30

var defense = 30;

// Use 'where' and 'less than equal to' operator 
  .then((pokemon) => {
    console.log(`Found a pokemon with defense of ${defense}! ${pokemon}`);
  })
  .catch((err) => {
    if (err) {
      console.log("There's an error retrieving your pokemon!");
    };
  });

