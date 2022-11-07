import React from 'react'
import ReactDOM from 'react-dom'

import './feeds.scss'

const Feeds = () => {
  return (
    <React.Fragment>
      <div className="main container">
        <div className="row">
          <div className="profile col-3">
            <h1>Testing?</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feeds />,
    document.body.appendChild(document.createElement('div')),
  )
})