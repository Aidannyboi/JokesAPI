const jokeController = require('../controllers/jokes.controler')

module.exports = (app) => {

    app.get('/api/jokes', jokeController.getAllJokes);
    app.get('/api/jokes/:id', jokeController.getOneJoke);
    app.post('/api/jokes', jokeController.createJoke);
    app.put('/api/jokes/:id', jokeController.updateJoke);
    app.delete('/api/jokes/:id', jokeController.destroyJoke);
}