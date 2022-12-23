import React from 'react'
import './navbar.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

const navbar = () => {
  const [ active, setActive ] = React.useState(false)
  

  return (
    <div className='app__nav'>
      <div className='app__nav-left'>
        <h2 className='h__manrope app__nav-gpt'>GPT-3</h2>
        <ul className='p__opensans'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#whatisgpt3'>What is GPT3?</a>
          </li>
          <li>
            <a href='#openAi'>Open Ai</a>
          </li>
          <li>
            <a href='#studies'>Case Studies</a>
          </li>
          <li>
            <a href='#libary'>Libary</a>
          </li>
        </ul>
        </div>
      <div className='app__nav-right'>
        <h2 className='p__opensans app__nav-btn1'>Sign in</h2>
        <button type='button' className='app__nav-btn'>Sign up</button>
        <div className={`menu-btn ${active ? "open" : ""} `} onClick={() => {
            setActive(prev => !prev)
          }}>
          <div className='menu-btn__burger'></div>
        </div>
        {/* <button type='button' className='hmb
        ' onClick={()=>setActive(prev => !prev)}>
          {active ? <AiOutlineClose size="2.5rem" /> : <RxHamburgerMenu size="2.5rem" /> }
        </button> */}
      </div>
      {active &&<div className={`app__nav-mobile ${active ? "scale-in-center" : "scale-out-center"}`}>
        <ul className='p__opensans'>
        <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#whatisgpt3'>What is GPT3?</a>
          </li>
          <li>
            <a href='#openAi'>Open Ai</a>
          </li>
          <li>
            <a href='#studies'>Case Studies</a>
          </li>
          <li>
            <a href='#libary'>Libary</a>
          </li>
            <li>
              <h4 className='app__nav-mobil-text'>Sign in</h4>
            </li>
            <li>
              <h4 className="app__nav-mobil-btn">Sign up</h4>
            </li>
          </ul>
      </div>}
    </div>
  )
}

export default navbar