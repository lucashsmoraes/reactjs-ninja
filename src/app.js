'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
        username: 'Lucas Moraes',
        photo: 'https://avatars1.githubusercontent.com/u/32342356?v=4',
        login: 'lucashsmoraes',
        repos: 7,
        followers: 1,
        following: 3
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
    }
  }
  render () {
    return <AppContent
      userInfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App
