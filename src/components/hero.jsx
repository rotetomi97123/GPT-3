import React from 'react'
import './hero.css'
import { ai, people} from '../assets'


const hero = () => {
  return (
    <div className='app__hero-container' id='home'>
      <div className='app__hero-left'>
        <h1 className='app__hero-title h__manrope'>
          Let’s Build Something
          amazing with GPT-3 
          OpenAI
        </h1>
        <p className='app__hero-p'>
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <span className='app__hero-input'>
          <input type='email' className="app__hero-email"placeholder="Your Email Address" />
          <button type='button' className='app__hero-btn'>Get Started</button>
        </span>
        <span className='app__hero-people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </span>
      </div>

      <div className='app__hero-right'>
        <img src={ai} alt="ai" className='ai' />
      </div>
    </div>
  )
}

export default hero