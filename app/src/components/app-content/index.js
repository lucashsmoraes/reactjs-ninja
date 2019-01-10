
import Search from '../search/index'
import UserInfo from '../user-info/user-info'
import Actions from '../actions/index'
import Repos from '../repos/repos'
import React from 'react'
import './app.css'

const AppContent = ({ userInfo, repos, starred, isFetching, handleSearch, getRepos, getStarred }) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
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