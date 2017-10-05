import React from 'react'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import { render, ReactDOM } from 'react-dom'

// component imports go here
import Header from './Header'

class App extends React.Component {

  render () {
    return (
      <Router>
      <div id="App">
        Hello Blue Sky
        <Route to='/' component={Header}/>
      </div>
      </Router>
    )
  }
}

export default App