import React, { Component } from 'react'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.State = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.createSession = this.createSession.bind(this);
  }

  componentDidMount() {
    this.setState({ 
      email: '', 
      username: '', 
      password: '' });
  }

  handleChange = (event) => {
    const value = event.target.value;
    switch (event.target.name) {
      case "email":
        this.setState({ email: value });
        break;
      case "username":
        this.setState({ username: value });
        break;
      case "password":
        this.setState({ password: value });
        break;
    } 
  }

  handleSubmit = (evemt) => {
    event.preventDefault();
    const { email, username, password } = this.state;

    fetch('/api/users')
  }

  render() {
    return (
      <React.Fragment>
        <div className="card p-2 mt-5 border border-primary">
          <div className="sign-in-title card-title"><h4>Sign up here</h4></div>
          <form id="signup-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input onChange={this.handleChange} type="text" name="username" value={this.username} className="form-control username mb-2 border border-primary" placeholder="username"/>
            </div>
            <div className="form-group col-xs-8">
              <input onChange={this.handleChange} type="email" name="email" value={this.email} className="form-control email my-2 border border-primary" placeholder="Email"/>
            </div>
            <div className="form-group col-xs-8">
              <input onChange={this.handleChange} type="password" name="password" value={this.password} className="form-control password my-2 border border-primary" placeholder="Password"/>
            </div>
            <button id="sign-in-btn" className="btn btn-default btn-primary col-xs-3">Sign up</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default Signup