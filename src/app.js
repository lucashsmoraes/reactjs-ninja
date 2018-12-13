'use strict'
import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
    <div className='container' data-id='1'> 
      <Title name='Lucas' lastName={[1,2,3]}/>
    </div>
    )
  }
})

export default App
