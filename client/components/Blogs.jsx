import React from 'react'
import { render } from 'react-dom'

import BlogData from '../../blog/blog-content.json'

class Blogs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "Content": BlogData,
      "Chosen Blog": null
    }
    console.log("Blogs Loaded:", this.state)
  }

  render(){
    return (
      <div>
        <h3>Blog Categories:</h3>
        <ol>
        {this.state.Content.map((category, i)=>{
          return <li key={i}>{category[0].name}</li>
        })}
        </ol>
      </div>

    )
  }
}

export default Blogs