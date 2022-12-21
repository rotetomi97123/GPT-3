import React from 'react'
import './companies.css'
import { atlassian , shopify, slack, dropbox, google } from '../assets'


const companies = () => {
  return (
    <div className='app__companies-container' style={{display:"flex", width:"100%",justifyContent:"center",flexWrap:"wrap"}}>
        <img src={atlassian} alt="atlassian" className='companies__logo' style={{marginRight:"2rem"}} />
        <img src={shopify} alt="shopify"className='companies__logo' style={{marginRight:"2rem"}}/>
        <img src={slack} alt="slack" className='companies__logo'style={{marginRight:"2rem"}}/>
        <img src={dropbox} alt="dropbox" className='companies__logo'style={{marginRight:"2rem"}}/>
        <img src={google} alt="google" className='companies__logo'/>
    </div>
  )
}

export default companies