import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,

  error,
  info,
  onChange
}) => {
  return (
    <div className="form">
      <textarea
        className={classnames({ 'is-invalid': error })}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />

      {/* {error && <div className="invalid-feedback">{error}</div>} */}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,

  onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;
