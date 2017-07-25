import React from 'react'
import ReactDOM from 'react-dom'

function RecentEntries(props) {
    console.log(props)
    const enter = props.entries
    console.log(enter)
    return (
        <div className='Entries'>
            <h2> Recent Entries </h2>
            {enter.map((entry, i) => {
                <div key='i'>
                    <a href={`${entry.link}`}> {entry.name} </a>
                </div>
            })}
        </div>
    )
}

export default RecentEntries

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