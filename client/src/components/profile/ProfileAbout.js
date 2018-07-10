import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];
    // Skill list
    const skills = profile.skills.map((skill, index) => (
      <div key={index}>
        <i />
        {skill}
      </div>
    ));

    return (
      <div>
        <h3>{firstName}'s</h3>
        <p>
          {isEmpty(profile.bio) ? (
            <span>{firstName} does not have a bio</span>
          ) : (
            <span>{profile.bio}</span>
          )}
        </p>
        <div>{skills}</div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
