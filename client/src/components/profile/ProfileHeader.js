import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import PropTypes from 'prop-types';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="header">
        <h1>{profile.user.name}</h1>
        <p>
          {profile.status}{' '}
          {isEmpty(profile.location) ? null : (
            <span>from {profile.location}</span>
          )}
        </p>
        <p>
          {isEmpty(profile.website) ? null : (
            <a href={profile.website} target="_blank">
              Link
            </a>
          )}
          {isEmpty(profile.social && profile.social.telegram) ? null : (
            <a href={profile.social.telegram} target="_blank">
              Link
            </a>
          )}
          {isEmpty(profile.social && profile.social.vk) ? null : (
            <a href={profile.social.vk} target="_blank">
              Link
            </a>
          )}
        </p>
      </div>
    );
  }
}

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileHeader;
