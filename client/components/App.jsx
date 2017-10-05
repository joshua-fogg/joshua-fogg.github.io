import React from 'react'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import { render, ReactDOM } from 'react-dom'

// component imports go here

class App extends React.Component {

  render () {
    return (
      <Router>
      <div id="App">
        Hello Blue Sky
      </div>
      </Router>
    )
  }
}

export default App