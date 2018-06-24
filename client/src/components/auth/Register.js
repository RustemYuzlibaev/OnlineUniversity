import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import '../../Assets/css/start/register.min.css';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

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
          <div className="form">
            <input
              type="text"
              className={classnames({ 'is-invalid': errors.name })}
              name="name"
              placeholder="Your Name"
              autoComplete="off"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          {/* {errors.name && <div className="invalid-feedback">{errors.name}</div>} */}

          <div className="form">
            <input
              type="email"
              className={classnames({ 'is-invalid': errors.email })}
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          {/* {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )} */}
          <div className="form">
            <input
              type="text"
              className={classnames({ 'is-invalid': errors.login })}
              name="login"
              placeholder="New Login"
              autoComplete="off"
              value={this.state.login}
              onChange={this.onChange}
            />
          </div>
          {/* {errors.login && (
            <div className="invalid-feedback">{errors.login}</div>
          )} */}
          <div className="form">
            <input
              type="password"
              className={classnames({ 'is-invalid': errors.password })}
              name="password"
              placeholder="New Password"
              autoComplete="off"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          {/* {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )} */}
          <div className="form">
            <input
              type="password"
              className={classnames({ 'is-invalid': errors.password2 })}
              name="password2"
              placeholder="New Password"
              autoComplete="off"
              value={this.state.password2}
              onChange={this.onChange}
            />
          </div>
          {/* {errors.password2 && (
            <div className="invalid-feedback">{errors.password2}</div>
          )} */}

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
