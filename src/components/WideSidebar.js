import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './WideSidebar.css'; // Import your custom CSS

export default function WideSidebar({ children }) {
  return (
    <div className="mh-100 d-flex flex-column inspector-wrapper bg-light">
      <div className="sidebar-wrapper container-fluid p-2 pt-4">
        {children}
      </div>
    </div>
  );
}
