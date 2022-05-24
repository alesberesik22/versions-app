import React from 'react'
import './Input.css'

function Input(props) {
  return (
    <div className='formInput'>
        <label>IP adresa</label>
        <input placeholder={props.placeHolder} onChange={e => props.setDBIP(e.target.value)}/>
    </div>
  )
}

export default Input