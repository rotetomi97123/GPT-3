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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
});

const hideElements = document.querySelectorAll('.hide')
hideElements.forEach((el) => observer.observe(el))

function App() {
  return (
    <div className="app__bg w-full">
      <Navbar />

      <section className='hide'>
      <Hero />
      </section>

      <section className='hide'>
        <Companies />
      </section>

      <section className='hide'>
        <WhatisGPT3 />
      </section>

      <section className='hide'>
        <Future />
      </section>

      <section className='hide'>
        <Possibilities />
      </section>

      <section className='hide'>
        <Register />
      </section>

      <section className='hide'>
        <Blogging />
      </section>

      <section className='hide'>
        <Footer />
      </section>
      </div>
  )
}

export default App
