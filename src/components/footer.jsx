import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div className='app__footer-container'>
      <div className='app__footer-container-box'>
        <div className='app__footer-container-box_top'>
          <h1>Do you want to step in to the <br className='br'/>
             future before others</h1>
          <button type='button'>Request Early Access</button>
        </div>
        <div className='app__footer-container-box_bottom'>
          <div className='app__footer-container-box_bottom-gpt3'>
            <h1>GPT-3</h1>
            <p>Crechterwoord K12 182 DK <br className='br' />
              Alknjkcb, All Rights Reserved</p>
          </div>
          <div className='app__footer-container-box_bottom-links'>
             <ul>
                <span><li>Links</li></span>
                <li>Overons</li>
                <li>Social Media</li>
                <li>Counters</li>
                <li>Contact</li>
             </ul>
          </div>
          <div className='app__footer-container-box_bottom-links'>
             <ul>
                <span><li>Company</li></span>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Contact</li>
             </ul>
          </div>
          <div className='app__footer-container-box_bottom-links'>
             <ul>
                <span><li>Get in touch</li></span>
                <li>Crechterwoord K12 182 DK Alknjkcb</li>
                <li>085-132567</li>
                <li>info@payme.net</li>
             </ul>
          </div>
        </div>
      </div>
      <div className='app__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default footer