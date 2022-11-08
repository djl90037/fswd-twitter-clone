import React from 'react'
import ReactDOM from 'react-dom'

import './home.scss';
import HomeNav from './homeNav.jsx'
import Login from './login.jsx'
import Signup from './signup';

const Home = (props) => {
  return (
    <React.Fragment>
      <HomeNav />
      <div className="container mt-5">
        <div className="row">
          <div className="welcome-text col-7">
            <p><strong>Welcome to Twitter</strong></p>
          </div>
          <div className="log-in col-5">
            <Login />
            <Signup />
          </div>
        </div>
      </div>
    </React.Fragment>
  )

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
