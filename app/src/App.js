import React, { Component } from 'react'
import MarkdownEditor from './components/markdown/markdown-editor'
import './css/style.css'


class App extends Component {
  constructor() {
    super()
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      value: e.target.value,
      count: e.target.value.length
    })
  }

  render() {
    return (
      <MarkdownEditor value={this.state.value} count={this.state.count} handleChange={this.handleChange}/>
    )
  }
}

export default App
