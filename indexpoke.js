const express = require('express');
const app = express()
const axios = require("axios")




app.get('/allpokemon/:min/:max', (req, res) => {
    const { min, max} = req.params
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${min} &limit=${max} `)
    .then(response => res.json(response.data))
});

app.get('/allpokemon/:id', (req, res) => {
    const {id} =  req.params
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id} `)
    .then(response => res.json(response.data))
});
//renvoie l'erreur 404
// app.get('*', (req, res) => {
//     res.status(404).send("Not found")
// })



module.exports = app