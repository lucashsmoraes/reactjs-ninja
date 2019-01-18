import React, { Component } from 'react'
import MarkdownEditor from './components/markdown/markdown-editor'
import marked from 'marked'
import {v4} from 'node-uuid'
import './css/style.css'

class App extends Component {
  constructor() {
    super()
    this.clearlState = () => ({
      value: '',
      id: v4()
    })
    this.state = { 
      ...this.clearlState(),
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
        localStorage.setItem(this.state.id, this.state.value)
        this.setState({
          isSaving: false
        })
      }      
    }

    this.createNew = () => {
      this.setState(this.clearlState())
      this.textarea.focus()
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      this.createNew()
    }

    this.handleCreate = () => {
      this.createNew()
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }
    this.textareaRef = (node) => {
      this.textarea = node
    }
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
