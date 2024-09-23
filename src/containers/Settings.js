import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import documents from "../views/documents";
import actionTypes from "../constants/actionTypes";
import 'bootstrap/dist/css/bootstrap.min.css';

class Settings extends Component {
  handleDocumentChange = (documentId) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_DOCUMENT_ID,
      documentId
    });
  };

  render() {
    if (!this.props.display) return null;

    const { documentId } = this.props.layout;

    return (
      <div>
        <div className='d-flex justify-content-between align-items-center'>
          <h5>Settings</h5>
        </div>
        <hr />
        <div>
          <label htmlFor="document-template" className="form-label">Document Template</label>
          <select
            id="document-template"
            className='form-control'
            onChange={e => this.handleDocumentChange(e.target.value)}
            value={documentId}
          >
            {Object.keys(documents).map(documentId => (
              <option key={documentId} value={documentId}>
                {documents[documentId].name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  layout: PropTypes.object.isRequired,
  display: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  layout: state.layout,
});

export default connect(mapStateToProps)(Settings);
