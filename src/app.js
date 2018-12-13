'use strict'
import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
    <div className='container' data-id='1'> 
      <Title name='Mundo'/> 
      <label htmlFor='input'>Input</label>
      <input type='text' id='input'/>
    </div>
    )
  }
})

export default App
