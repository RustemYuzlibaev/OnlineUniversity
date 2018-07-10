import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'; // redirect

import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      login: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      login: this.state.login,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state; // const errors = this.state.errors

    return (
      <div className="Register">
        <h1>Register</h1>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            error={errors.name}
          />

          <TextFieldGroup
            type="email"
            placeholder="Email Address"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
          />

          <TextFieldGroup
            placeholder="Login"
            name="login"
            value={this.state.login}
            onChange={this.onChange}
            error={errors.login}
          />

          <TextFieldGroup
            type="password"
            placeholder="New Password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            error={errors.password}
          />

          <TextFieldGroup
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={this.state.password2}
            onChange={this.onChange}
            error={errors.password2}
          />

          <div className="form">
            <input
              type="submit"
              name="confirming"
              value="Submit"
              className="form-confirm"
            />
          </div>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

// To get states
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
// this.props.auth.user
// this.props.auth.isAuthenticated

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
