const express = require("express")

const app = express()
const port = 3005
const todoRouter = require("./routes")

app.use("/api/todos", todoRouter)

app.listen(port, () => {
  console.log("app is runing on port ", port)
})
