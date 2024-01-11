const express = require("express")

const router = express.Router()
const todoController = require("./todoController")

router
  .route("/")
  .get(todoController.getAllTodos)
  .post(todoController.createTodo)

router
  .route("/:id")
  .delete(todoController.deleteTodo)
  .put(todoController.editTodo)
  .patch(todoController.updateTodo)
module.exports = router
