const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Must enter a joke."]
    },
    punchline: {
        type: String,
        required: [true, "Must enter a punchline."]
    }
}, {timestamps: true});


const Joke = mongoose.model('jokes', jokeSchema);

module.exports = Joke;