import React from 'react'
import ReactDOM from 'react-dom'

function OtherBlogs(props) {
    console.log(props)
    const blogs = props.blogs
    return (
        <div className='oBlogs'>
            <h2> Other blogs </h2>
            <div className='otherBlog-item'>
            {blogs.map((blog, i)=> <div key={i}> <a href={`${blog.link}`}> {blog.blogTitle} </a> </div>)}
            </div>
        </div>
    )
}

export default OtherBlogs