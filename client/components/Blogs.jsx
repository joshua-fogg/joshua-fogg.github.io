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
          const style = {
            width: '70%',
            height: '300px',
            border: 'solid 2px grey',
            color: 'green',
            backgroundImage: "url(" + category[0].image + ")"
          }
          return (
            <li key={i}> 
              <div style={style}>
              <h4>{category[0].name}:</h4>  
              </div>
            </li>
            )
        })}
        </ol>
      </div>

    )
  }
}

export default Blogs