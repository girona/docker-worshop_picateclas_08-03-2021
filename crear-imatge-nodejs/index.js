const express = require("express")
const app = express()
app.get("/", (_req, res) => res.send("Hola picateclas"))
app.listen(3000, () => console.log("Iniciat!"))
