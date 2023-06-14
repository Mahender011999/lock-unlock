import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [text,setText] = useState(true)

  const changeText = ()=>setText(!text)
  
  return (
    <div className='container'>
    <center>
      <p >{text ? <img className='image' src='https://assets.ccbp.in/frontend/hooks/lock-img.png '
       alt=""/>:<img className='image' src='https://assets.ccbp.in/frontend/hooks/unlock-img.png '
        alt=""/>}</p>
      <p className='text'>{text ? 'Your device is locked' : 'Your device is Unlocked'}</p>
      <button className='button' onClick={changeText}>{text ? "Unlock":'lock'}</button>
      </center>
    </div>
  )
}

export default App
