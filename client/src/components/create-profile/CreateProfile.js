import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: '',
      website: '',
      location: '',
      profession: '',
      status: '',
      skills: '',
      bio: '',
      vk: '',
      telegram: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const profileData = {
      handle: this.state.handle,
      website: this.state.website,
      location: this.state.location,
      skills: this.state.skills,
      status: this.state.status,
      bio: this.state.bio,
      vk: this.state.vk,
      telegram: this.state.telegram
    };
    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Vk profile URL"
            name="vk"
            icon="fab fa-vk"
            value={this.state.vk}
            onChange={this.onChange}
            error={errors.vk}
          />
          <InputGroup
            placeholder="Telegram profile URL"
            name="telegram"
            icon="fab fa-telegram"
            value={this.state.telegram}
            onChange={this.onChange}
            error={errors.telegram}
          />
        </div>
      );
    }

    // Select options for status
    const options = [
      {
        label: '* Select Professional Status',
        value: 0
      },
      {
        label: 'Developer',
        value: 'Developer'
      },
      {
        label: 'Junior Developer',
        value: 'Junior Developer'
      },
      {
        label: 'Senior Developer',
        value: 'Senior Developer'
      },
      {
        label: 'Manager',
        value: 'Manager'
      },
      {
        label: 'Student or Learning',
        value: 'Student or Learning'
      },
      {
        label: 'Intern',
        value: 'Intern'
      },
      {
        label: 'Other',
        value: 'Other'
      }
    ];

    return (
      <div className="create-profile">
        <h1>Create Your Profile</h1>
        <p>Let's get some info to make your profile</p>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="* Profile Handle"
            name="handle"
            value={this.state.handle}
            onChange={this.onChange}
            error={errors.handle}
            info="A unique handle for your profile URL"
          />
          <SelectListGroup
            placeholder="Status"
            name="status"
            value={this.state.status}
            onChange={this.onChange}
            options={options}
            error={errors.status}
            info="Give us an idea of where you are at in your career"
          />

          <TextFieldGroup
            placeholder="* Website"
            name="website"
            value={this.state.website}
            onChange={this.onChange}
            error={errors.website}
            info="Could be your own website or a company one"
          />
          <TextFieldGroup
            placeholder="* Location"
            name="location"
            value={this.state.location}
            onChange={this.onChange}
            error={errors.location}
            info="City or city & state"
          />
          <TextFieldGroup
            placeholder="* Skills"
            name="skills"
            value={this.state.skills}
            onChange={this.onChange}
            error={errors.skills}
            info="Please use comma separated values"
          />
          <TextAreaFieldGroup
            placeholder="* Short Bio"
            name="bio"
            value={this.state.bio}
            onChange={this.onChange}
            error={errors.bio}
            info="Tell us a little about yourself"
          />

          <div>
            <button
              type="button"
              onClick={() => {
                this.setState(prevState => ({
                  displaySocialInputs: !prevState.displaySocialInputs
                }));
              }}
            >
              Add Social Network Links
            </button>
          </div>
          {socialInputs}
          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
