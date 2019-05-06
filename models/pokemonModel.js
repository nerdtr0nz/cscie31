/*  pokemonModel.js
    For more information on Subdocuments, please visit https://mongoosejs.com/docs/subdocs.html
*/
const mongoose = require("mongoose");

//  Get access to Schema constructor
const Schema = mongoose.Schema;

//  Create a sub document for pokemon gender

const GenderSchema = new Schema({
    female: { type: Boolean, required: false },
    male: { type: Boolean, required: false },
    genderless: { type: Boolean, required: false },
});

// Create a sub document for stats
const StatsSchema = new Schema({
    hp: { type: Number, required: false },
    attack: { type: Number, required: false },
    defense: { type: Number, required: false },
});

// Create a schema for pokemon
const PokemonSchema = new Schema({
    poke_id: { type: Number, required: true },
    name: { type: String, required: true },
    shiny_variant: { type: Boolean, required: false },
    gender: [GenderSchema],
    stats: [StatsSchema]
});

// Create a Pokemon model
const Pokemon = mongoose.model('pokemon', PokemonSchema);

// Export Pokemon
module.exports = Pokemon;
