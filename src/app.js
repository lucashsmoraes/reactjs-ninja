'use strict'
import React, { Component } from 'react'
import Square from './square'

class App extends Component{
  render() {
    return (
      <div className='container' data-id='1'>
      {['blue', 'red', 'green'].map((square) => (
          <Square key={square} color={square}/>
      ))}       
     </div>
    )
  }
}

export default App
