import React from 'react'
import { Route, HashRouter as Router } from 'react-router-dom'
import { render, ReactDOM } from 'react-dom'

// component imports go here
import Header from './Header'
import Blogs from './Blogs'

const App = () => {

    return (
      <Router>
        <div id="app">
        <Header />
        <Route path="/blogs" component={Blogs} />
        <br />
        </div>
      </Router>
    )
}

export default App