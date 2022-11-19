import React from 'react'
import Component from 'react'

import { safeCredentials, handleErrors } from '../utils/fetchHelper'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'user',
    };

    this.getUsername = this.getUsername.bind(this);
  }

  componentDidMount() {
    this.getUsername();
  }

  getUsername = () => {
    fetch('/api/authenticated', safeCredentials({
      method: 'GET',
    }))
    .then(handleErrors)
    .then((data) => {
      this.setState({
        username: data.username
      })
    })
  }

  render() {
    const { username } = this.state;
    return (
          <div className="border rounded border-primary">
            <div className="profile-content">
              <div className="user">
                <a className="username ps-2 fw-bold" href="#">{username}</a>
                <br />
                <a className="screenName text-decoration-none ps-2" href="#">@{username}</a>
              </div>
            </div>
      </div>
    )
  }
}

export default Profile