import React from 'react'
import { render } from 'react-dom'

import BlogPartial from './Blog-Partial'

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
          <BlogPartial contentPartial={contentPartial} key={i}/>
        )
      })
      }
    </div>
  )
}
export default Blog