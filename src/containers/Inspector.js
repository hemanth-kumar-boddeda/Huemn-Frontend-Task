import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { DebounceInput } from 'react-debounce-input';
import actionTypes from "../constants/actionTypes";
import blocks from "../views/blocks";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Inspector.css'; // Import custom styles

const Inspector = ({ display, layout, dispatch }) => {
  // Handle block data changes
  const handleChangeBlockData = (blockUuid, key, value) => {
    dispatch({
      type: actionTypes.CHANGE_BLOCK_DATA,
      blockUuid,
      key,
      value
    });
  };

  // Handle block deletion
  const handleDeleteBlock = (blockUuid) => {
    dispatch({
      type: actionTypes.DELETE_BLOCK,
      blockUuid,
    });
  };

  // Do not display if 'display' prop is false
  if (!display) return null;

  const blockUuid = layout.selectedBlockUuid;
  const block = layout.blocks.find(el => el.uuid === blockUuid);

  // Display message if no block is selected
  if (!block) return <div className='text-center'>First add and select a block section</div>;

  const config = blocks[block.blockId].config;

  return (
    <div className="inspector p-3 border rounded shadow-sm">
      <div className='d-flex justify-content-between align-items-center'>
        <h5>Inspector</h5>
        <button className='btn btn-outline-danger btn-sm' onClick={() => handleDeleteBlock(blockUuid)}>
          Delete block
        </button>
      </div>
      <hr />
      {Object.keys(config).map((key, index) => {
        const fieldConfig = config[key];
        if (fieldConfig.type === 'string') {
          return (
            <div className='form-group' key={index}>
              <label>{fieldConfig.name}</label>
              <DebounceInput
                debounceTimeout={500}
                type='text'
                className='form-control'
                placeholder={fieldConfig.name}
                value={block.data[key] || ''}
                onChange={(e) => handleChangeBlockData(blockUuid, key, e.target.value)}
              />
            </div>
          );
        } else if (fieldConfig.type === 'color') {
          return (
            <div className='form-group' key={index}>
              <label>{fieldConfig.name}</label>
              <DebounceInput
                debounceTimeout={500}
                type='color'
                className='form-control'
                value={block.data[key] || '#000000'}
                onChange={(e) => handleChangeBlockData(blockUuid, key, e.target.value)}
              />
            </div>
          );
        } else if (fieldConfig.type === 'boolean') {
          return (
            <div className='form-check' key={index}>
              <input 
                type='checkbox' 
                className='form-check-input' 
                checked={block.data[key] || false} 
                onChange={(e) => handleChangeBlockData(blockUuid, key, e.target.checked)} 
              />
              <label className='form-check-label'>{fieldConfig.name}</label>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

Inspector.propTypes = {
  layout: PropTypes.object.isRequired,
  display: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  layout: state.layout,
});

export default connect(mapStateToProps)(Inspector);
