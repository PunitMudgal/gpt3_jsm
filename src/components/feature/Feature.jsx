import React from 'react'
import './feature.css'

export default function Feature(props) {
  return (
    <div className='feature-container'>
    <div className='feature-container-title'>
      <div className='little-strip'/>
     <h1> {props.title} </h1>
    </div>
    <div className='feature-container-description'>
      <p>{props.description}</p>
      </div>      
  </div>
  )
}
