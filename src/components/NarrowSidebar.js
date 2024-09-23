import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NarrowSidebar.css'; // Import custom CSS

export default function NarrowSidebar({ activeTab, onChangeActiveTab }) {
  const tabs = [
    { icon: 'edit' },
    { icon: 'search' },
    { icon: 'view_quilt' },
    { icon: 'subject' },
    { icon: 'insert_photo' },
    { icon: 'featured_video' },
    { icon: 'perm_contact_calendar' },
    { icon: 'table_chart' },
    { icon: 'view_agenda'       },
    { icon: 'save'          },
    { icon: 'settings' },
    { icon: 'help_outline' },
  ];

  return (
    <div className="icons-wrapper bg-dark d-flex flex-column justify-content-between">
      <div className="flex-grow-1">
        {tabs.slice(0, 9).map((tab, index) => (
          <button
            key={index}
            type="button"
            className={`btn btn-sidebar ${activeTab === index ? "active-button" : ""}`}
            onClick={() => onChangeActiveTab(index)}
          >
            <span className="material-icons">{tab.icon}</span>
            <span className="d-none d-md-inline ml-2">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="bottom-buttons">
        {tabs.slice(9).map((tab, index) => (
          <button
            key={index + 9}
            type="button"
            className={`btn btn-sidebar ${activeTab === index + 9 ? "active-button" : ""}`}
            onClick={() => onChangeActiveTab(index + 9)}
          >
            <span className="material-icons">{tab.icon}</span>
            <span className="d-none d-md-inline ml-2">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

NarrowSidebar.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onChangeActiveTab: PropTypes.func.isRequired,
};
