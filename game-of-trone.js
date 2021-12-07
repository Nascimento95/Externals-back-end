const express = require('express');
const app = express()
const gameOfThrone = require('./gameOfThrone.json')
const axios = require("axios")

app.get('/game-of-thrones/json', (req, res) => {
    res.json(gameOfThrone);
});

app.get('/game-of-thrones/url', (req, res) => {
    axios.get("http://localhost:5000/game-of-thrones/json")
    .then(response => console.log(response.data))
});

module.exports = app