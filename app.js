const express = require("express")
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');

// middle-wares
app.use(express.json())
app.use(cors())

// routes
const productRoute = require('./routes/product.route')

app.get("/", (req, res) => {
    res.send("route is working! YaY")
})

// posting to database
app.use('/api/v1/product', productRoute)

module.exports = app;



