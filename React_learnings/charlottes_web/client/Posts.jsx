import React from 'react'
import ReactDOM from 'react-dom'

function Posts(props) {
    console.log(props)
    const posts = props.posts
    return (
        <div className='posts'>
            {posts.map((post) => 
                <div>
                    <ul>
                        <div key={post.id}>
                            <div className = "post-title">Title: {post.title}</div>
                            <div className="post-date">Date: {post.date}</div>
                            {post.paragraphs.map((par, i) => 
                                <div key={i}> {par} </div>
                            )}<br/>
                            Comment count: {post.commentCount} <br />
                            <br />
                        </div>
                    </ul>
                </div>
            )}
        </div>

    )
}

export default Posts