import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header">
      <div id="name"><h1> Joshua Fogg </h1> Comming Up For Air </div>
      <div id="navigation-bar">
        <Link to='/blogs'><div className="btn btn-primary">Blog</div></Link>
        <Link to='/about'><div className="btn btn-primary">About</div></Link>
        <Link to='/portfolio'><div className="btn btn-primary">Portfolio</div></Link>
      </div>
    </div>
  )
}

export default Header