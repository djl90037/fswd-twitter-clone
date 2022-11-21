import React from 'react'
import NewTweet from './newtweet'
import Tweet from './tweet'

function FeedBox(props) {
  return (
    <React.Fragment>
      <div className="col-9 feed-box border-primary rounded">
        <NewTweet/>
        <div className="feed mt-5">
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
    </React.Fragment>
  )
}

export default FeedBox