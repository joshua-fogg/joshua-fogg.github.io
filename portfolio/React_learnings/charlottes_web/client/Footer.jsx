import React from 'react'
import ReactDOM from 'react-dom'

function Footer(props) {
    console.log(props)
    return (
        < div className="foot">
         {props.footer.author}, Copyright {props.footer.author} 
        </div>
    )
}

export default Footer