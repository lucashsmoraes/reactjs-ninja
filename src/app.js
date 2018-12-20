'use strict'

import React, { Component } from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }
  render () {
    return (
      <div className='app'>

        <Search />
        <UserInfo />
        <Actions />
        <Repos
          className='repos'
          title='Repositórios:'
          repos={[{
            name: 'Nome do Repositório',
            link: '#'
          }]}
        />
        <Repos
          className='starred'
          title='Favoritos:'
          repos={[{
            name: 'Nome do Repositório',
            link: '#'
          }]}
        />
      </div>
    )
  }
}

export default App
