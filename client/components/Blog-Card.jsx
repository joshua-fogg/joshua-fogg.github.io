import React from 'react'

const card = (props) => {
  console.log(props)
  const CP = props.contentPartial
  return (
    <div className="partial" key={props.i}>
      <h2>{CP.heading}</h2>
      <p>{CP.content}</p>
    </div>
  )
}

export default card