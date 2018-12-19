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

  shouldComponentUpdate (nextProps, nextState) {
    //console.log('shouldComponentUpdate', this.state, nextState)
    return this.state.time !== nextState.time
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate timer', this.props, nextProps)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate timer', this.props, prevProps)
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