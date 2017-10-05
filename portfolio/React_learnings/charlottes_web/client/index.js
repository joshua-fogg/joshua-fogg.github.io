import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'


const message = { text: "Future home of Charlotte's web" }

ReactDOM.render( < App message = { message }
    />,
    document.getElementById('root')
)