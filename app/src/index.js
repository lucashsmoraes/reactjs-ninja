import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom'

const renderApp = (NextApp) => {
  render(
      <NextApp />,
    document.querySelector('[data-js="App"]')
  )
}

renderApp(App)
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    renderApp(NextApp)
  })
}
serviceWorker.unregister();
