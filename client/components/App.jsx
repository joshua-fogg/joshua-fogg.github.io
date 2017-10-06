import React from 'react'
import { Route, HashRouter as Router } from 'react-router-dom'
import { render, ReactDOM } from 'react-dom'

// component imports go here
import Header from './Header'
import Blogs from './Blogs'

const App = () => {

    return (
      <Router>
        <div id="container">
        <Header />
        <Blogs />
        <br />
          Page  - Raw Text: Hello Blue Sky
        
        </div>
      </Router>
    )
}

export default App