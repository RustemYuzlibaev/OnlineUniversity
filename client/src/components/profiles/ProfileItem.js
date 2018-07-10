import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div>
        <div>
          <h3>{profile.user.name}</h3>
          <p>
            {profile.status}{' '}
            {isEmpty(profile.location) ? null : (
              <span>from {profile.location}</span>
            )}
          </p>
          <p>
            {isEmpty(profile.profession) ? null : (
              <span>{profile.profession}</span>
            )}
          </p>
          <Link to={`/profile/${profile.handle}`}>View Profile</Link>
        </div>
        <div>
          <h4>Skill set</h4>
          <ul>
            {profile.skills.slice(0, 4).map((skill, index) => (
              <li key={index}>
                <i />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
