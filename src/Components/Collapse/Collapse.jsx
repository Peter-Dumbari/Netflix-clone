import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

function CollapsibleItem({ title, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapsible-item ${isCollapsed ? '' : 'collapsed'}`}>
      <div className="collapsible-header">
        <button type="button" onClick={toggleCollapse}>
          {title}
          <div className="icon">
            <FontAwesomeIcon icon={isCollapsed ? faPlus : faTimes} />
          </div>
        </button>
      </div>
      {!isCollapsed && (
        <div className="collapsible-content">
          <h3>{children}</h3>
        </div>
      )}
    </div>
  );
}

CollapsibleItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default CollapsibleItem;
