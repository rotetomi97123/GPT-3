import React from 'react'
import './blogging.css'
import { blog01, blog02, blog03, blog04, blog05 } from '../assets'
 
const blogging = () => {
  return (
    <div className='app__blog-container' id='libary'>
      <div className="app__blog-container-box">
        <div className='app__blog-container-box-text'>
          <h1>A lot is happening, <br /> 
            We are blogging about it.</h1>
        </div>
        <div className='app__blog-container-box-libary'>
            <div className='app__blog-container-box-libary-box'>
               <img src={blog01} alt="blog01"/>
               <div className='app__blog-container-box-libary-box_content'>
                 <span>
                  <p>Sep 26, 2021</p>
                  <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                 </span>
                 <h5>Read Full Article</h5>
               </div>
            </div>

            <div className='app__blog-container-box-libary-box2-3'>
              <div className='col'>
                <div className='app__blog-container-box-libary-box2'>
                    <img src={blog02} alt="blog02" />
                    <div className='app__blog-container-box-libary-box_content2'>
                      <span>
                        <p>Sep 26, 2021</p>
                        <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                      </span>
                      <h5>Read Full Article</h5>
                    </div>
                </div>
                <div className='app__blog-container-box-libary-box2  blog_margin margin-mobile'>
                    <img src={blog03} alt="blog02" />
                    <div className='app__blog-container-box-libary-box_content2'>
                      <span>
                        <p>Sep 26, 2021</p>
                        <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                      </span>
                      <h5>Read Full Article</h5>
                    </div>
                </div>
              </div>
              
            </div>
            <div className='col'>
                <div className='app__blog-container-box-libary-box2 margin_small'>
                    <img src={blog04} alt="blog02" />
                    <div className='app__blog-container-box-libary-box_content2'>
                      <span>
                        <p>Sep 26, 2021</p>
                        <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                      </span>
                      <h5>Read Full Article</h5>
                    </div>
                </div>
                <div className='app__blog-container-box-libary-box2 blog_margin margin_small'>
                    <img src={blog05} alt="blog02" />
                    <div className='app__blog-container-box-libary-box_content2'>
                      <span>
                        <p>Sep 26, 2021</p>
                        <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                      </span>
                      <h5>Read Full Article</h5>
                    </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default blogging