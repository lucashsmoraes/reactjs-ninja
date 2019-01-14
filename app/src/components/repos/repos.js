import React from 'react'
import './repos.css'
import Pagination from '../pagination'

const Repos = ({ className, title, repos, handlePagination }) => (
  <div className={className}>
    <h2>{ title } </h2>
    <ul>
      {repos.repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>

    <Pagination total={4} activePage={repos.pagination.activePage} onClick={handlePagination}/>
  </div>
)

Repos.defaultProps = {
  className: ''
}

export default Repos