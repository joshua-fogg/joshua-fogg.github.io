import React  from 'react'
import ReactDOM from 'react-dom'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import OtherBlogs from './OtherBlogs.jsx'
import Posts from './Posts.jsx'
import RecentEntries from './RecentEntries.jsx'

const header = require ('../data/header')
const footer = require ('../data/footer')
const otherBlogs = require ('../data/other-blogs')
const posts = require ('../data/posts')
const eentries = require ('../data/recent-entries')

function App(props) {
  return (
    <div className='page'>
      <div className = 'Header'>
      <Header content={header} />
      </div>

      <div className = 'main-content'>
       <OtherBlogs blogs={otherBlogs} />
        <Posts posts= {posts} key ={posts.id} />
         <RecentEntries entries={eentries} />
         </div>
         
         <div>
          <Footer footer={footer} />
          </div>
    </div>
  )
}

export default App