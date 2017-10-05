import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './client/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('app')
  )
})