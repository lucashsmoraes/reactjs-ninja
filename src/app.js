'use strict'

import React, { Component } from 'react'

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
        <div className='search'>
          <input type='search' placeholder='Digite o nome do usuário' />
        </div>
        <div className='user-info'>
          <img src='https://avatars1.githubusercontent.com/u/32342356?v=4' />
          <h1>
            <a href='https://github.com/lucashsmoraes'>Lucas Henrique Santana de Moraes</a>
          </h1>

          <ul className='repos-info'>
            <li> Repositórios: 7</li>
            <li> Seguidores: 1</li>
            <li> Seguindo: 3</li>
          </ul>

          <div className='actions'>
            <button>Ver Repositórios</button>
            <button>Ver Favoritos</button>
          </div>

          <div className='repos'>
            <h2>Repositórios: </h2>
            <ul>
              <li><a href='#'>Nome do repositório</a></li>
            </ul>
          </div>

          <div className='starred'>
            <h2>Favoritos: </h2>
            <ul>
              <li><a href='#'>Nome do repositório</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
