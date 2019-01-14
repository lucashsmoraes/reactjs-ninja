import React, { Component } from 'react'
import AppContent from './components/app-content/index'
import ajax from '@fdaciuk/ajax'
import token from './token'

const initialReposState = {
  repos: [],
  pagination: {}
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: initialReposState,
      starred: initialReposState,
      isFetching: false
    }
    this.perPage = 3
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl (username, type, page = 1) {
    const internalType = type ? `/${type}` : ''
    const internalUser = username ? `/${username}` : ''
    const access_token = token.GITHUB
    return `https://api.github.com/users${internalUser}${internalType}?per_page=${this.perPage}&page=${page}&access_token=${access_token}`
  }

  handleSearch (e) {
    const value = e.target.value
    const KeyCode = e.which || e.keyCode
    const ENTER = 13
    if (KeyCode === ENTER) {
      this.setState({ isFetching: true })
      ajax().get(this.getGitHubApiUrl(value))
        .then((result) => {
          this.setState({
            userInfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: initialReposState,
            starred: initialReposState
          })
        })
        .always(() => this.setState({ isFetching: false }))
    }
  }

  getRepos (type, page) {
    return (e) => {
      const username = this.state.userInfo.login
      ajax().get(this.getGitHubApiUrl(username, type, page))
        .then((result) => {
          this.setState({
            [type]: {
              repos: result.map((repo) => ({
                name: repo.name,
                link: repo.html_url
              })),
              pagination: this.state[type].pagination
            }
          })
        })
    }
  }

  render () {
    return <AppContent
      {...this.state}
      handleSearch={this.handleSearch}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
      handlePagination={(type, page) => this.getRepos(type, page)()}
    />
  }
}

export default App
