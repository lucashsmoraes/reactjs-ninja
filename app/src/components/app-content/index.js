
import Search from '../search/index'
import UserInfo from '../user-info/user-info'
import Actions from '../actions/index'
import Repos from '../repos/repos'
import React from 'react'
import './app.css'

const AppContent = ({ userInfo,
  repos,
  starred, 
  isFetching, 
  handleSearch, 
  getRepos, 
  getStarred, 
  handlePagination 
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length && <Repos
      className='repos'
      title='Repositórios:'
      repos={repos}
      handlePagination={(clicked) => handlePagination('repos:', clicked)}
    />}

    {!!starred.length && <Repos
      className='starred'
      title='Favoritos:'
      repos={starred}
      handlePagination={(clicked) => handlePagination('starred:', clicked)}
    />}
  </div>
)

export default AppContent