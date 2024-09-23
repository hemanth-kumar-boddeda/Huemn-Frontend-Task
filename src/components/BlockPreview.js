import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlockPreview.css'; // Import your custom CSS

class BlockPreview extends Component {
  handleAddBlock = () => {
    const { blockId, onPushBlock } = this.props;
    if (onPushBlock) {
      onPushBlock(blockId);
    }
  };

  render() {
    const { image, name } = this.props;

    return (
      <div className='card block-entry shadow-lg mb-3'>
        <img
          src={image}
          alt={name}
          className='card-img-top img-fluid'
        />
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>{name}</h5>
          <button
            className='btn btn-primary mt-auto'
            onClick={this.handleAddBlock}
          >
            Add Block
          </button>
        </div>
      </div>
    );
  }
}

BlockPreview.propTypes = {
  blockId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onPushBlock: PropTypes.func.isRequired,
};

export default BlockPreview;
