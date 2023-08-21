import React from 'react';
import './input.scss';
import PropTypes from 'prop-types';

function Input({ bordercolor }) {
  return (
    <input
      type="text"
      placeholder="Email address"
      className={`input_field ${bordercolor}`}
    />
  );
}

Input.propTypes = {
  bordercolor: PropTypes.string,
};

Input.defaultProps = {
  bordercolor: null,
};

export default Input;
