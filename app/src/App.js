import React, { Component } from 'react'
import AppContent from './components/app-content/index'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
    this.perPage = 3
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl (username, type) {
    const internalType = type ? `/${type}` : ''
    const internalUsern = username ? `/${username}` : ''
    return `https://api.github.com/users${internalUsern}${internalType}?per_page=${this.perPage}`
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
            repos: [],
            starred: []
          })
        })
        .always(() => this.setState({ isFetching: false }))
    }
  }

  getRepos (type) {
    return (e) => {
      const username = this.state.userInfo.login
      ajax().get(this.getGitHubApiUrl(username, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            }))
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
    />
  }
}

export default App
