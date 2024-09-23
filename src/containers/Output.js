import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Output.css'; // Import custom styles

const Output = ({ display, html }) => {
  // Don't display the component if 'display' is false
  if (!display) return null;

  return (
    <div className="output-container p-3 border rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center">
        <h5>Export</h5>
      </div>
      <hr />
      <div>
        <label className="form-label">Output HTML</label>
        <textarea
          readOnly
          className="form-control"
          rows={10}
          value={html || ''} // Default to empty string if no HTML
          style={{ width: '100%' }} // Ensure textarea takes full width
        />
      </div>
    </div>
  );
};

Output.propTypes = {
  display: PropTypes.bool.isRequired, // Boolean prop to control visibility
  html: PropTypes.string.isRequired,  // HTML content prop
};

export default Output;
