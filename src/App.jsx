import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import './App.css'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Services/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App