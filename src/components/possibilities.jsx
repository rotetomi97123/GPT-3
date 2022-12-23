import React from 'react'
import './possibilities.css'
import { possibility } from '../assets'

const possibilities = () => {
  return (
    <div className='app__possi-container' id='studies'>
        <div className='app__possi-container-box'>
          <div className='app__possi-container-box-img'>
              <img src={possibility} alt="possibilty"/> 
          </div>
          <div className='app__possi-container-box-right'>
            <p>Request Early Access to Get Started</p>
            <h1>The possibilities are <br />
              beyond your imagination</h1>
            <h5>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</h5>
          </div>
        </div>
    </div>
  )
}

export default possibilities