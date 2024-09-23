import React from 'react';
import { useDrop } from 'react-dnd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles.css';

export default function Preview(props) {
  const [{ isOver }, drop] = useDrop({
    accept: 'BLOCK', // Ensure this matches the type used in draggable components
    drop: (item) => {
      // Only push block if it is not already added
      props.onPushBlock(item.blockId);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const iframeSrcDoc = `
    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
          /* Custom styles can be injected here if needed */
        </style>
      </head>
      <body>
        ${props.html} <!-- Insert the HTML passed via props -->
      </body>
    </html>
  `;

  return (
    <div className='page-content-wrapper overflow-hidden d-flex justify-content-center'>
      <div className={`preview-window shadow-lg preview-mode-${props.previewMode}`} ref={drop}>
        {/* Visual cue when dragging over */}
        {isOver && <div className="drag-overlay">Drop here</div>}
        
        {/* Preview Toolbar */}
        <div className='preview-toolbar d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center'>
            <span className="material-icons preview-toolbar-dot">stop_circle</span>
            <span className="material-icons preview-toolbar-dot">stop_circle</span>
            <span className="material-icons preview-toolbar-dot">stop_circle</span>
          </div>
          {/* Buttons to toggle preview modes */}
          <div className='d-flex'>
            {[0, 1, 2, 3].map((mode) => (
              <button
                key={mode}
                onClick={() => props.onChangePreviewMode(mode)}
                className={`btn btn-sm btn-preview-toolbar d-flex align-items-center ${props.previewMode === mode ? 'active' : ''}`}>
                <span className="material-icons">{['devices', 'tv', 'tablet', 'smartphone'][mode]}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Preview window iframe */}
        <iframe
          title={'visual-iframe'}
          className={`visual-iframe`}
          srcDoc={iframeSrcDoc}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
