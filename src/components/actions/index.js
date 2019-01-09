'use strict'

import React from 'react'
import './actions.css'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>Ver Repositórios</button>
    <button onClick={getStarred}>Ver Favoritos</button>
  </div>
)

export default Actions
