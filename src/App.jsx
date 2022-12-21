import { useState } from 'react'
import './App.css'
import {
  Navbar,
  Blogging,
  Footer,
  Future,
  Hero,
  Possibilities,
  Register,
  WhatisGPT3,
  Companies,
} from './components'

function App() {
  return (
    <div className="app__bg w-full">
      <Navbar />
      <Hero />
      <Companies />
      <WhatisGPT3 />
      <Blogging />
      <Footer />
      <Future />
      <Possibilities />
      <Register />
    </div>
  )
}

export default App
