'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps)
  }

  componentDidMount () {
    console.log('componentDidMount')
    this.timer = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    clearInterval(this.timer)
  }

  render () {
    return <div> Timer: {this.state.time} </div>
  }
}

export default Timer
