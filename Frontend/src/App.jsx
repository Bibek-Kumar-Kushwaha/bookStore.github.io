import React from "react"
import { Route, Routes } from 'react-router-dom'
import Home from "./Home/Home.jsx"
import Course from './Components/Course.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Navbar from "./Components/Navbar.jsx"
import Login from "./Components/Login.jsx"
import Register from "./Components/Register.jsx"

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Course/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}