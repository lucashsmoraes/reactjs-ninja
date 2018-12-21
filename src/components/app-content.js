'use strict'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import React from 'react'

const AppContent = ({ userInfo, repos, starred, handleSearch, getRepos, getStarred }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length && <Repos
      className='repos'
      title='Repositórios:'
      repos={repos}
    />}

    {!!starred.length && <Repos
      className='starred'
      title='Favoritos:'
      repos={starred}
    />}
  </div>
)

export default AppContent
