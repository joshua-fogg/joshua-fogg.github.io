import React from 'react'
import { render } from 'react-dom'

const Blog = (props) => {
  const entry = props.entry
  const lastEntry = entry.length()
  const images = props.entry.length(-1)
  console.log('images:',images, 'LastEntry:',lastEntry)
  return (
    <div className="">
      <h1>{entry["page-title"]}</h1>
      {entry.content.map((contentPartial, i) => {
        let CP = contentPartial
        return (
          <div className="partial" key={i}>
            <h2>{CP.heading}</h2>
            <p>{CP.content}</p>
          </div>
        )
      })
      }
      <div className="">
        
      </div>
    </div>
  )
}
export default Blog