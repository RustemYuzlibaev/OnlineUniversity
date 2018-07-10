import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => (
  <div>
    <Link to="/edit-profile">Edit Profile</Link>
    <Link to="/add-experience">Add Experience</Link>
    <Link to="/add-education">Add Education</Link>
  </div>
);

export default ProfileActions;
