import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({
  name,

  value,
  error,
  info,
  onChange,
  options
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form">
      <select
        className={classnames({ 'is-invalid': error })}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info && <div className="info">{info}</div>}
      {/* {error && <div className="invalid-feedback">{error}</div>} */}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,

  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectListGroup;
