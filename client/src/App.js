import { useEffect, useState } from "react"
import Todo from "./componets/Todo"
import Modal from "./componets/Modal"

function App() {
  const [toDos, setToDos] = useState([])
  const [newTodo, setNewTodo] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({})

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const addTodo = async (e) => {
    e.preventDefault()
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newTodo }),
    })
    const todo = await res.json()
    console.log(todo)
    setToDos([...toDos, todo.data])

    setNewTodo("")
  }

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
    <div>
      {showModal && (
        <Modal
          toggleModal={toggleModal}
          setTodos={setToDos}
          modalContent={modalContent}
        />
      )}
      <div className=" max-w-lg  md:w-2/5 m-10 md:mx-auto justify-center items-center px-8 py-4 rounded-md shadow-md">
        <h1 className=" text-center text-2xl  md:text-5xl font-bold mt-10">
          My To Do's
        </h1>
        <form
          className=" flex justify-center mt-10 mx-auto w-full"
          onSubmit={addTodo}
        >
          <input
            type="text"
            required
            placeholder="Add a new todo"
            className=" px-4 py-1 w-full border-2 border-gray-300 focus:outline-none focus:border-green-400 transition-all duration-200"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className=" ml-5 px-4 py-2 bg-green-400 text-white font-bold hover:bg-green-500 transition-all duration-200">
            Add
          </button>
        </form>
        <div className=" flex flex-col items-center gap-5 mt-10 ">
          {toDos.length > 0 ? (
            toDos.map((todo) => (
              <Todo
                todo={todo}
                key={todo._id}
                setTodos={setToDos}
                ShowModal={toggleModal}
                setModalContent={setModalContent}
              />
            ))
          ) : (
            <p>empty</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
