import React, { useState } from "react"

function Modal({ toggleModal, setTodos, modalContent }) {
  const [newTodo, setNewTodo] = useState(modalContent.name)
  const editTodo = async (id) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name: newTodo }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json()
    console.log(data)
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo._id === id) {
          return { ...todo, name: todo.name }
        }
        return todo
      })
    )
  }
  return (
    <div className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
      <div className=" w-[500px]">
        <div className=" bg-white w-full p-10 flex justify-center items-center flex-col">
          <h1 className=" text-2xl font-bold">Edit Todo</h1>
          <form className=" flex flex-col items-center gap-5">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Edit todo"
              className=" px-4 py-1 w-full border-2 border-gray-300 focus:outline-none focus:border-green-400 transition-all duration-200"
            />
            <div className="flex justify-between space-x-7">
              <button
                className=" px-4 py-2 bg-green-400 text-white font-bold hover:bg-green-500 transition-all duration-200"
                onClick={() => editTodo(modalContent.id)}
              >
                Edit
              </button>
              <button
                className=" px-4 py-2 bg-red-400 text-white font-bold hover:bg-red-500 transition-all duration-200"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
