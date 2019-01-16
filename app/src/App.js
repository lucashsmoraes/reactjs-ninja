import React, { Component } from 'react'
import MarkdownEditor from './components/markdown/markdown-editor'
import './css/style.css'


class App extends Component {
  constructor() {
    super()
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.getMarkup = this.getMarkup.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      value: e.target.value
    })
  }

  getMarkup() {
    return { __html: this.state.value }
  }

  render() {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange} 
        getMarkup={this.getMarkup}
      />
    )
  }
}

export default App
