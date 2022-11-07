import React from 'react'
import ReactDOM from 'react-dom'

import './home.scss';
import Navbar from './homeNav.jsx'

const Home = (props) => {
  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  )
  
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
