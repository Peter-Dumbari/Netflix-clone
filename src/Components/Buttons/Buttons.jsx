import React from 'react';
import './Buttons.scss';
import PropTypes from 'prop-types';

function Buttons({ title }) {
  return (
    <button type="button" className="btn-component">
      {title}
    </button>
  );
}

function SimpleBtn({ title }) {
  return (
    <button type="button" className="simple-btn">
      {title}
    </button>
  );
}

SimpleBtn.propTypes = {
  title: PropTypes.string.isRequired,
};

Buttons.propTypes = {
  title: PropTypes.string.isRequired,
};

export { SimpleBtn, Buttons };
