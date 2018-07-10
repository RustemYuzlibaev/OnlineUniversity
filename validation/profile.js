const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';
  data.status = !isEmpty(data.status) ? data.status : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to be between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills are required';
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status is required';
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.vk)) {
    if (!Validator.isURL(data.vk)) {
      errors.vk = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.telegram)) {
    if (!Validator.isURL(data.telegram)) {
      errors.telegram = 'Not a valid URL';
    }
  }

  if (Validator.isEmpty)
    return {
      errors,
      isValid: isEmpty(errors)
    };
};
