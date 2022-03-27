import React from 'react'
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Resume from './components/Resume/Resume'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
    <Nav/>
    <Home/>
    <About/>
    <Resume/>
    <Contact/>
    </>
  )
}

export default App