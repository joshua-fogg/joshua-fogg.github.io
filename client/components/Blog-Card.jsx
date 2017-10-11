import React from 'react'

const card = (props) => {
  console.log(props)
  const CP = props.contentPartial
  return (
    <div className="card" key={props.i}>
      <div className="card-image">
        <img src="" alt="" />
      </div>
      <div>
        <h2>{CP.heading}</h2>
        <p>{CP.content}</p>
      </div>
    </div>
  )
}

export default card