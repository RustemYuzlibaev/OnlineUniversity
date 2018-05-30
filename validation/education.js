const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.specialty = !isEmpty(data.specialty) ? data.specialty : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.description = !isEmpty(data.description) ? data.description : '';

  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Degree field is required';
  }

  if (Validator.isEmpty(data.specialty)) {
    errors.specialty = 'Specialty field is required';
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'Field of study field is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  if (Validator.isEmpty)
    return {
      errors,
      isValid: isEmpty(errors)
    };
};
