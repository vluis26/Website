import React from "react"
import Contact from "./components/Contact"
import Coursework from "./components/Coursework"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"


function App() {
  return (
    <div className="App">
      <Intro />
      <Coursework />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    
  )
}

export default App
