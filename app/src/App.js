import React, { Component } from 'react'
import MarkdownEditor from './components/markdown/markdown-editor'
import marked from 'marked'
import { v4 } from 'node-uuid'
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
      isSaving: null,
      files: {}
    }


    this.handleChange = (e) => {
      e.preventDefault()
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }
    this.handleSave = () => {
      if (this.state.isSaving) {
        const newFile = {
          title: 'sem titulo',
          content: this.state.value
        }
        localStorage.setItem(this.state.id, JSON.stringify(newFile))
        this.setState({
          isSaving: false,
          files: {
            ...this.state.files,
            [this.state.id]: newFile
          }
        })
      }
    }

    this.createNew = () => {
      this.setState(this.clearlState())
      this.textarea.focus()
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      let files = Object.keys(this.state.files).reduce((acc, fileId) => {
        return fileId === this.state.id ? acc : {
          ...acc,
          [fileId]: this.state.files[fileId]
        }
      }, {})
      this.setState({ files })
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

    this.handleOpenfile = (fileId) => () => {
      this.setState({
        value: this.state.files[fileId].content,
        id: fileId
      })
    }
  }

  componentDidMount() {
    const filesStorage = Object.keys(localStorage)
    this.setState({
      files: filesStorage.filter((id) => id.match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/)).reduce((acc, fileId) => ({
        ...acc,
        [fileId]: JSON.parse(localStorage.getItem(fileId))
      }), {})
    })
  }

  componentDidUpdate() {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 300)
  }

  componentWillUnmount() {
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
        files={this.state.files}
        handleOpenfile={this.handleOpenfile}
        textareaRef={this.textareaRef}
      />
    )
  }
}

export default App
