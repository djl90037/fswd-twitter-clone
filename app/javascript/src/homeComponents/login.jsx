import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.State = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createSession = this.createSession.bind(this);
  }

  handleChange = (event) => {
    const value = event.target.value;
    switch (event.target.name) {
      case 'username':
        this.setState({ username: value });
        break;
      case 'password':
        this.setState({ password: value });
        break;
    }
  }

  createSession = () => {
    const { username, password } = this.state;
    fetch('/api/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        }
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {username, password} = this.state;

    fetch('/api/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        }
      })
    })
    .then((response) => response.json())
    .then(data => {
      console.log('Success:', data)
      this.createSession();
    })
    .catch(error => {
      console.log('Error:', error)
    });
  }

  render() {
    return (
      <div className="card p-2 mb-2 border border-primary" style={{ maxWidth: "22rem" }}>
        <div className="log-in-title card-title"><h3>Login</h3></div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" name="username" value={this.username} onChange={this.handleChange} className="form-control username mb-2 border border-primary shadow" placeholder="username"/>
          </div>
          <div className="form-group col-xs-8">
            <input type="password" value={this.password} onChange={this.handleChange} className="form-control password my-2 border border-primary shadow" placeholder="password"></input>
          </div>
          <button type="submit" className="btn btn-default btn-primary col-xs-3 float-right">Log in</button>
        </form>
      </div>
    )
  }
}

export default Login;