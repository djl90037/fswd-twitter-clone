import React from 'react'

import { safeCredentials, handleErrors, safeCredentialsFormData } from '../utils/fetchHelper'
import './feeds.scss'

class NewTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    .then(data => {
      this.setState({
        username: data.username
      });
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('tweet[message]', this.state.message)

    fetch('/api/tweets', safeCredentialsFormData({
      method: 'POST',
      body: formData,
    }))
    .then(handleErrors)
    .then(data => {
      console.log('data:', data)
      if(data.success) {
        this.props.getAllTweets();
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div 
        style={ {maxWidth: "700px"} } 
        className="col-9 tweet border rounded border-primary my-2">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <textarea className="form-control my-2" rows="3" name="message" value={this.message} onChange={this.handleChange} placeholder="New tweet"/>
            </div>
          <button type="submit" className="btn btn-primary float-end shadow my-2">Post</button>
        </form>
      </div>
    )
  }
}

export default NewTweet