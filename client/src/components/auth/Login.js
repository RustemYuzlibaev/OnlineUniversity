import React, { Component } from 'react';
import '../../Assets/css/start/login.min.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      login: this.state.email,
      password: this.state.password
    };
    console.log(user);
  }

  render() {
    return (
      <div className="Login">
        <h1>Inlet</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form">
            <input
              type="text"
              name="email"
              placeholder="Login"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <div className="form">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <div className="form">
            <a className="is-forgotten">Forgotten password?</a>
          </div>
          <div className="form">
            <input type="submit" value="Log in" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
