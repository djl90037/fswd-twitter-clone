import React from 'react'
import ReactDOM from 'react-dom'

import './home.scss';
import HomeNav from './homeNav.jsx'

const Home = (props) => {
  return (
    <React.Fragment>
      <HomeNav />
    </React.Fragment>
  )

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
