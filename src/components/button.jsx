import React from 'react'
import './button.css'

const button = ({ title }) => {
  return (
    <div>
        <div className='button__line'/>
        <h1 className='button__title'>{title}</h1>
    </div>
  )
}

export default button