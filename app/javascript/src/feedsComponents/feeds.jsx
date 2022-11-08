import React from 'react'
import ReactDOM from 'react-dom'

import './feeds.scss'
import FeedsNav from './feedsNav'

const Feeds = () => {
  return (
    <React.Fragment>
      <FeedsNav />
    </React.Fragment>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feeds />,
    document.body.appendChild(document.createElement('div')),
  )
})