const Todo = require("./toDoModels")

exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find()
    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    })
  }
}
exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body)

    res.status(200).json({
      status: "success",
      data: todo,
    })
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    })
  }
}
exports.deleteTodo = async (req, res, next) => {
  try {
    await Todo.findByIdAndDelete(req.params.id)

    res.status(200).json({
      status: "success",
      message: null,
    })
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    })
  }
}

exports.editTodo = async (req, res, next) => {
  try {
    const updateTodo = { ...req.body, completed: false }
    const todo = await Todo.findByIdAndUpdate(req.params.id, updateTodo, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({
      status: "success",
      message: todo,
    })
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    })
  }
}
exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id)
    if (todo) {
      todo.completed = !todo.completed
      await todo.save()
      console.log(todo)
    }

    res.status(200).json({
      status: "success",
      message: todo,
    })
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    })
  }
}
