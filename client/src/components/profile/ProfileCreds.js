import React, { Component } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id}>
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
          {exp.to === null ? (
            ' Now'
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position: </strong>
          {exp.title}
        </p>
        <p>
          {exp.description === '' ? null : (
            <span>
              <strong>Description: </strong>
              {exp.description}
            </span>
          )}
        </p>
      </li>
    ));

    const eduItems = education.map(edu => (
      <li key={edu._id}>
        <h4>{edu.degree}</h4>
        <p>
          <strong>Field of Study</strong> {edu.fieldofstudy}
        </p>
        <p>
          <strong>Specialty</strong> {edu.specialty}
        </p>
        <p>
          <strong>Description</strong> {edu.description}
        </p>
      </li>
    ));

    return (
      <div>
        <div>
          <h3>Experience</h3>
          {expItems.length > 0 ? (
            <ul>{expItems}</ul>
          ) : (
            <p>No Experience Listed</p>
          )}
        </div>
        <div>
          <h3>Education</h3>
          {eduItems.length > 0 ? (
            <ul>{eduItems}</ul>
          ) : (
            <p>No Education Listed</p>
          )}
        </div>
      </div>
    );
  }
}

ProfileCreds.propTypes = {
  experience: PropTypes.array.isRequired,
  education: PropTypes.array.isRequired
};

export default ProfileCreds;
