import React from 'react'
import { render } from 'react-dom'

import BlogData from '../../blog/blog-content.json'

class Blogs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      BlogData,
      BlogType: ["Culture","Technology","Other", "Ramblings"]
    }
    console.log(this.state)
  }

  render(){
    return (
      <div>Blogs Component Text</div>
    )
  }
}

export default Blogs