const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A todo must have a name"],
    maxlength: [40, "A todo name must have less or equal then 40 characters"],
    minlength: [10, "A todo name must have more or equal then 10 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})
const Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo
