const express = require('express');
const app = express()
const axios = require("axios")
const port = 5000
const gameOfThrone = require('./gameOfThrone.json')
const gameOf = require("./game-of-trone")
const  pokemon = require("./indexpoke")
app.use('/poke', pokemon);
app.use('/perso', gameOf )


// app.get('/game-of-thrones/json', (req, res) => {
//     res.json(gameOfThrone);
// });
// app.get('/game-of-thrones/url', (req, res) => {
//     axios.get("http://localhost:5000/game-of-thrones/json")
//     .then(response => console.log(response.data))
// });

app.get('*', (req, res) => {
    res.status(404).send("Not found")
})

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});