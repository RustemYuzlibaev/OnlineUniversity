import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/css/start/welcomepage.min.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav>
          <div className="brand">
            <Link to="/" className="navbar-brand">
              Online University
            </Link>
          </div>

          <ul className="auth">
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
