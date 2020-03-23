import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './pages/App'

export default class Root extends React.Component {
  /**
   * It is recommended to catch errors,
   * otherwise it will cause single spa to stop abnormally
   */
  componentDidCatch (error, info) {
    console.error(error, info)
  }
  render () {
    return (
      <App />
    )
  }
}
