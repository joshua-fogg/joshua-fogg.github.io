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
    console.log(this.props)
  }
  render(){
    return (
      <div>Blogs Comp Text</div>
    )
  }
}

export default Blogs