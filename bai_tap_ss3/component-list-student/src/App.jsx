import { useState } from 'react'
import './App.css'
import StudentInfoComponent from "./component/StudentInfoComponent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <StudentInfoComponent></StudentInfoComponent>
    </>
  )
}

export default App
