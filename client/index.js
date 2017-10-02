import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './client/App.jsx'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <BrowserRouter >
      <App />
    </BrowserRouter>
    ,
    document.getElementById('app')
  )
})