import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.degree}</td>
        <td>{edu.specialty}</td>

        <td>
          <button onClick={this.onDeleteClick.bind(this, edu._id)}>
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4>Education Credentials</h4>
        <table>
          <thead>
            <tr>
              <th>Degree</th>
              <th>Specialty</th>
              <th>Years</th>
              <th />
            </tr>
            {education}
          </thead>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
