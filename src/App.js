import { useState } from "react"
import { Routes, Route, Link } from "react-router-dom";

import PersonProfile from "./pages/PersonProfile/index.js"
import Dashboard from "./pages/Dashboard/index.js"

import "./styles.css"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople}/>} />
        <Route path="/view/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} />
      </Routes>
    </>
  )
}
