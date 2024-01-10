const express = require("express")

const router = express.Router()
const todoController = require("./todoController")

router
  .route("/")
  .get(todoController.getAllTodos)
  .post(todoController.createTodo)

router
  .route("/:id")
  .delete((req, res) => {
    res.status(203).json({ data: "delet request to   ---/todos/:id" })
  })
  .put((req, res) => {
    res.status(200).json({ data: "put request to   ---/todo/ids" })
  })
module.exports = router
