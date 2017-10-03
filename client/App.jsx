import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { render, ReactDOM } from 'react-dom'

// component imports go here

export default class App extends React.Component {

  render () {
    return (
      <div id="App">
        Hello Blue Sky
        <script src='bundle.js' />
      </div>
    )
  }
}