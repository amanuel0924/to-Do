const express = require("express")
const path = require("path")

const app = express()
const todoRouter = require("./routes")

app.use(express.json())
app.use(express.static(path.join(__dirname, "build")))
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "biuld/index.html"))
})

app.use("/api/todos", todoRouter)

module.exports = app
