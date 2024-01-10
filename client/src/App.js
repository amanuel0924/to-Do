import { useEffect, useState } from "react"
function App() {
  const [toDos, setToDos] = useState({})
  useEffect(() => {
    const getAlltodos = async () => {
      const res = await fetch("/api/todos")
      const todos = await res.json()

      setToDos(todos)
    }
    getAlltodos()
  }, [])
  return (
    <div>
      <h1>App</h1>
      <p>{toDos}</p>
    </div>
  )
}

export default App
