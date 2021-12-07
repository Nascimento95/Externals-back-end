const express = require('express');
const app = express()
const port = 5000

const gameOf = require("./game-of-trone")
const  pokemon = require("./indexpoke")
app.use('/poke', pokemon);
app.use('/perso', gameOf )




app.get('*', (req, res) => {
    res.status(404).send("Not found")
})

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});