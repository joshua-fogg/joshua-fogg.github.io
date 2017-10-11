import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'


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
          
          return ( 
              <div className="btn btn-danger" key={i}>
                  <Link to={`/blogs/${category[0].name}/`}><h4>{category[0].name}:</h4></Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}
//   const style = {
//   width: '70%',
//   height: '300px',
//   border: 'solid 2px grey',
//   color: 'green',
//   backgroundImage: `url("${category[0].image}")`,
//   backgroundSize: "cover",
//   display: "inline-block"
// }
export default Blogs