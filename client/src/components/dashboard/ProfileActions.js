import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="buttons">
      <Link to="/edit-profile">
        <i />Edit Profile
      </Link>
      <Link to="/add-experience">
        <i />Add Experience
      </Link>
      <Link to="/add-education">
        <i />Add Education
      </Link>
    </div>
  );
};

export default ProfileActions;
