import { useEffect, useState } from "react"
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md"

function App() {
  const [toDos, setToDos] = useState([])
  const [newTodo, setNewTodo] = useState("")
  useEffect(() => {
    const getAlltodos = async () => {
      const res = await fetch("/api/todos")
      const todos = await res.json()
      console.log(todos)
      setToDos(todos.data.todos)
    }
    getAlltodos()
  }, [])
  return (
    <div className=" max-w-lg w-2/5 m-auto">
      <h1 className=" text-center text-5xl font-bold mt-10">My To Do's</h1>
      <form className=" flex justify-center mt-10 mx-auto w-full">
        <input
          type="text"
          placeholder="Add a new todo"
          className=" px-4 py-1 w-full border-2 border-gray-300 focus:outline-none focus:border-green-400 transition-all duration-200"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className=" ml-5 px-4 py-2 bg-green-400 text-white font-bold hover:bg-green-500 transition-all duration-200">
          Add
        </button>
      </form>
      <div className=" flex flex-col items-center gap-5 mt-10">
        {toDos.length > 0 ? (
          toDos.map((todo) => (
            <div
              key={todo._id}
              className=" flex justify-between px-4 py-2 bg-gray-200  text-xl w-full "
            >
              <h3>{todo.name}</h3>
              <button className=" hover:scale-125 duration-200 transition-all">
                {todo.completed ? (
                  <MdOutlineCheckBox />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank />
                )}
              </button>
            </div>
          ))
        ) : (
          <p>empty</p>
        )}
      </div>
    </div>
  )
}

export default App
