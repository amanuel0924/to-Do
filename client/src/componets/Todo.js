import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineRestoreFromTrash,
  MdOutlineEditNote,
} from "react-icons/md"

const Todo = ({ todo, setTodos, ShowModal, setModalContent }) => {
  const updateTodo = async (id) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PATCH",
    })
    const data = await res.json()
    console.log(data)
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo._id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    )
  }
  const deleteTodo = async (id) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    })
    const data = await res.json()
    console.log(data)
    setTodos((prev) => prev.filter((todo) => todo._id !== id))
  }
  const editTodo = async () => {
    setModalContent({ id: todo._id, name: todo.name, completed: false })
    ShowModal()
  }

  return (
    <div
      key={todo._id}
      className=" flex justify-between px-4 py-2 shadow-md rounded-md  text-xl w-full "
    >
      <h3>{todo.name}</h3>
      <div className="flex  justify-between items-center space-x-4">
        <button
          onClick={() => updateTodo(todo._id)}
          className=" hover:scale-125 duration-200 transition-all"
        >
          {todo.completed ? (
            <MdOutlineCheckBox className=" text-green-600" />
          ) : (
            <MdOutlineCheckBoxOutlineBlank className=" text-yellow-300" />
          )}
        </button>
        <button onClick={() => deleteTodo(todo._id)}>
          <MdOutlineRestoreFromTrash size={23} className=" text-red-400" />
        </button>
        <button onClick={editTodo}>
          <MdOutlineEditNote size={23} className=" text-cyan-700" />
        </button>
      </div>
    </div>
  )
}
export default Todo
