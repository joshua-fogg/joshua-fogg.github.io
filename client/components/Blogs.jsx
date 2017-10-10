import React from 'react'
import { Link } from 'react-router'
import { render } from 'react-dom'

import BlogData from '../../blog/blog-content.json'

class Blogs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "Content": BlogData
    }
  }

  render(){
    return (
      <div>
        <h3>Blog Categories:</h3>
        {this.state.Content.map((category, i)=>{
          const style = {
            width: '70%',
            height: '300px',
            border: 'solid 2px grey',
            color: 'green',
            backgroundImage: `url("${category[0].image}")`,
            backgroundSize: "cover",
            display: "inline-block"
          }
          return ( 
              <div style={style} key={i}>
                  <h4>{category[0].name}:</h4>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Blogs