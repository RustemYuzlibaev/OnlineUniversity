import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileActions';

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      title: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false
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
    const expData = {
      company: this.state.company,
      title: this.state.title,

      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addExperience(expData, this.props.history);
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
      <div className="add-experience">
        <Link to="/dashboard">Go back </Link>
        <h1>Add Experience</h1>
        <p>Add any job or position that you have had in the past or current</p>
        <p>* = required fields</p>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="* Company"
            name="company"
            value={this.state.company}
            onChange={this.onChange}
            error={errors.company}
          />
          <TextFieldGroup
            placeholder="* Job Title"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            error={errors.title}
          />

          <h6>From Date</h6>
          <TextFieldGroup
            name="from"
            type="date"
            value={this.state.from}
            onChange={this.onChange}
            error={errors.from}
          />
          <h6>To Date</h6>
          <TextFieldGroup
            name="to"
            type="date"
            value={this.state.to}
            onChange={this.onChange}
            error={errors.to}
            disabled={this.state.disabled ? 'disabled' : ''}
          />
          <div className="form-check">
            <input
              type="checkbox"
              name="current"
              value={this.state.current}
              checked={this.state.current}
              onChange={this.onCheck}
              id="current"
            />
            <label htmlFor="current" className="check-label">
              Current Job
            </label>
          </div>
          <TextAreaFieldGroup
            placeholder="Job Description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            error={errors.description}
            info="Tell us about the position"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(
  withRouter(AddExperience)
);
