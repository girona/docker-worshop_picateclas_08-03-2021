const express = require("express")
const app = express()
const os = require("os")
app.get("/", (_req, res) => {
  console.log("request rebut " + os.hostname())
  res.send("hello " + os.hostname())
})
app.listen(3000, () => console.log("Iniciat!"))
