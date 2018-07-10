import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        // is there an empty object
        dashboardContent = (
          <div>
            <p>
              Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
            {<ProfileActions />}
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <div>
              <button onClick={this.onDeleteClick.bind(this)}>
                Delete My Account
              </button>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p>Welcome {user.name}</p>
            <p>You have not yet setup profile, please add some info</p>
            <Link to="/create-profile">Create Profile</Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <h1>Dashboard</h1>
          {dashboardContent}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ profile: state.profile, auth: state.auth });

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
