import React from 'react'
import ReactDOM from 'react-dom'

function Header(props) {
    console.log(props)
    return (
        < div >
        <a href={`${props.content.link}`}>
            <h1>{props.content.title}</h1>
        </a>
        </div>
    )
}

export default Header