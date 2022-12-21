import React from 'react'
import './whatisGPT3.css'
import { Button } from '../components'

const whatisGPT3 = () => {
  return (
    <div className='app__gpt-container'>
        <div className='app__gpt-container-box'>
          <div className='app__gpt-container-box1-3'>
            <Button title="What is GPT-3" />
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
          </div>
          <div className='app__gpt-container-box2-3'>
            <h1>The possibilities are beyond  <br />
              your imagination</h1>
              <p>Explore The Library</p>
          </div>
          <div className='app__gpt-container-box3-3'>
            <div className='app__gpt-container-box3-3_box'>
              <Button title="Chatbots" />
              <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
            </div>
            <div className='app__gpt-container-box3-3_box'>
              <Button title="Knowledgebase" />
              <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b </p>
            </div>
            <div className='app__gpt-container-box3-3_box'>
              <Button title="Education" />
              <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default whatisGPT3