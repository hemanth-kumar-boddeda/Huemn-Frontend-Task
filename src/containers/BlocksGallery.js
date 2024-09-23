import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlockPreview from "../components/BlockPreview";
import blocks from '../views/blocks';

class BlocksGallery extends Component {
  render() {
    if (!this.props.display) return null;

    return (
      <div>
        <h5>Category: {this.props.category}</h5>
        <hr />
        {Object.keys(blocks).map(blockId => {
          const block = blocks[blockId];
          if (block.category === this.props.category) {
            return (
              <BlockPreview
                key={blockId}
                name={block.name}
                blockId={blockId}
                image={block.previewImageUrl}
                onPushBlock={(id) => {
                  console.log('Block clicked:', id);
                  this.props.onPushBlock(id); // Log when block is added
                }} 
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}


BlocksGallery.propTypes = {
  onPushBlock: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
};

export default BlocksGallery;
