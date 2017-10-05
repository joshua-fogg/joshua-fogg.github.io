import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="header">
    <div id="name"><h1> Joshua Fogg </h1> Comming Up For Air </div>
    <div id="navigation-bar">
      <Link to='/blogs'>Blog</Link>
      <Link to='/about'>About</Link>
      <Link to='/portfolio'>Portfolio </Link>
    </div>
  </div>
)

export default Header