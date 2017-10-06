import React from 'react'
import { render } from 'react-dom'

import BlogData from '../../blog/blog-content.json'

class Blogs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      BlogData,
      BlogType: []
    }
  }
  render(){
    return Blogs
  }
}

export default Blogs