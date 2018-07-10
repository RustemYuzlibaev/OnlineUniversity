import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileActions';

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: '',
      specialty: '',
      fieldofstudy: '',
      description: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const eduData = {
      degree: this.state.degree,
      specialty: this.state.specialty,
      fieldofstudy: this.state.fieldofstudy,

      description: this.state.description
    };

    this.props.addEducation(eduData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state; // const errors = this.state.errors

    return (
      <div className="add-education">
        <Link to="/dashboard">Go back </Link>
        <h1>Add Education</h1>
        <p>Add any info that you have attended</p>
        <p>* = required fields</p>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="* Degree"
            name="degree"
            value={this.state.degree}
            onChange={this.onChange}
            error={errors.degree}
          />
          <TextFieldGroup
            placeholder="* Specialty"
            name="specialty"
            value={this.state.specialty}
            onChange={this.onChange}
            error={errors.specialty}
          />
          <TextFieldGroup
            placeholder="* Field of study"
            name="fieldofstudy"
            value={this.state.fieldofstudy}
            onChange={this.onChange}
            error={errors.fieldofstudy}
          />

          <TextAreaFieldGroup
            placeholder="* Program Description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            error={errors.description}
            info="Tell us about the program that you were in"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addEducation })(
  withRouter(AddEducation)
);
