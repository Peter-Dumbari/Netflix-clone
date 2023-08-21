import React from 'react';
import './Buttons.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Buttons({ title }) {
  return (
    <button type="button" className="btn-component">
      <span>{title}</span>
      <FontAwesomeIcon icon={faChevronRight} />
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
