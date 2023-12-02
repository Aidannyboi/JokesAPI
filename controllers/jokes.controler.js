const Joke = require('../models/jokes.models');

module.exports = {

    getAllJokes: (req, res) =>{
        Joke.find()
            .then((allJokes) => {
                res.json(allJokes);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    getOneJoke: (req, res) => {
        Joke.findById(req.params.id)
            .then((oneJoke) => {
                res.json(oneJoke);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },

    createJoke: (req, res) => {
        Joke.create(req.body)
            .then((newJoke) =>{
                res.json(newJoke)
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },

    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then((updatedJoke) => {
                res.json(updatedJoke);
            })
            .catch((err) =>{
                console.log("Bazinga" + err)
                res.status(400).json(err);
            })
    },

    destroyJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then((deletedJoke) =>{
                res.json(deletedJoke);
            })
            .catch((err) =>{
                res.status(400).json(err);
            })
    }
}