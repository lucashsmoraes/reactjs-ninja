import React, { Component } from 'react'
import MarkdownEditor from './components/markdown/markdown-editor'
import marked from 'marked'
import './css/style.css'

import hljs from 'highlight.js'
marked.setOptions({
  highlight: (code) => {
    return hljs.highlightAuto(code).value
  }
})

class App extends Component {
  constructor() {
    super()
    this.state = { 
      value: '',
      isSaving: null
    }

    this.handleChange = (e) => {
      e.preventDefault()
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }
    this.handleSave = () => {      
      if (this.state.isSaving){
        localStorage.setItem('md', this.state.value)
        this.setState({
          isSaving: false
        })
      }
      
    }
    this.handleRemove = () => {
      localStorage.removeItem('md')
      this.setState({value: ''})
    }

    this.handleCreate = () => {
      this.setState({value: ''})
      this.textarea.focus()
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }
    this.textareaRef = (node) => {
      this.textarea = node
    }
  }

  componentDidMount () {
    const value = localStorage.getItem('md')
    this.setState({value: value || ''})    
    this.handleSave()
  }
  
  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 300)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render() {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate} 
        getMarkup={this.getMarkup}
        textareaRef={this.textareaRef}
      />
    )
  }
}

export default App
