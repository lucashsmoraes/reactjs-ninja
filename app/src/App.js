import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = { 
      counter: 0
    }
  }

  // getTitle () {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("My app with async / await!")
  //     },2000)      
  //   })
  // }

  async componentDidMount () {
    // const title = await import('./components/Title')
    // this.setState({
    //   title: await this.getTitle(),
    //   Component: title.default
    // })
    this.setState((state) => ({counter: state.counter + 1}))  
  }

  render () {
    const {counter} = this.state
    return (
      <div>
        counter: {counter}
      </div>
    )
    
  }
}

export default App
