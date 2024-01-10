const Todo = require("./toDoModels")

exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find().toArray()
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
    // const todo= await  Todo.create(req.body)
    console.log(req.body)
    next()
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    })
  }
}
