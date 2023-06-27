const express = require("express")
const morgan = require("morgan")
const app = express()

app.use(morgan("tiny"))
app.use(express.json())

app.get("/", async (req, res) => {
    res.json({ ping1: "pong2" })
})

module.exports = app