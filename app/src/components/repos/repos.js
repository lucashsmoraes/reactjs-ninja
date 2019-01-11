import React from 'react'
import './repos.css'
import Pagination from '../pagination'

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h2>{ title } </h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>

    <Pagination total={10}/>
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: []
}

export default Repos