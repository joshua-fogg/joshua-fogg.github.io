import React from 'react'

const card = (props) => {
  console.log(props)
  const Blog = props.content
  return (
    <div className="card" key={props.i}>
      <div className="card-image">
        <img src="" alt="" />
      </div>
      <div>
        <h2>{Blog.heading}</h2>
        <p>{Blog.content}</p>
      </div>
    </div>
  )
}

export default card