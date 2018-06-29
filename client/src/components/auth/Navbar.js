import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="auth">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <a href="" onClick={this.onLogoutClick.bind(this)}>
            Log out
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="auth">
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    );

    return (
      <div className="Navbar">
        <nav>
          <div className="brand">
            <Link to="/" className="navbar-brand">
              Online University
            </Link>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
