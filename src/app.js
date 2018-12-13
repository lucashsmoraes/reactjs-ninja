'use strict'
import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
    <div className='container' data-id='1'> 
      <Title name='Lucas'/>
    </div>
    )
  }
})

export default App
