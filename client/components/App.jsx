import React from 'react'
import { Route, HashRouter as Router } from 'react-router-dom'
import { render, ReactDOM } from 'react-dom'

// component imports go here
import Header from './Header'
import Blog from './Blog-Entry'
import Blogs from './Blogs'
import Footer from './Footer'


const App = () => {

    return (
      <Router>
        <div id="app">
        <Header />
        <Route exact path="/blogs" component={Blogs} />
        <Route path="/blogs/:genre/:id" component={Blog}/>
        <Footer />
        </div>
      </Router>
    )
}

export default App