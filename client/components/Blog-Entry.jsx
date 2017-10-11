import React from 'react'
import { render } from 'react-dom'

import BlogCard from './Blog-Card'

const Blog = (props) => {
  const entry = props.entry
  const lastEntry = entry.length()
  const images = props.entry.length(-1)
  console.log('images:',images, 'LastEntry:',lastEntry)
  return (
    <div className="">
      <h1>{entry["page-title"]}</h1>
      {entry.content.map((contentPartial, i) => {
        return (
          <BlogCard contentPartial={contentPartial} key={i}/>
        )
      })
      }
      <div className="">
        
      </div>
    </div>
  )
}
export default Blog