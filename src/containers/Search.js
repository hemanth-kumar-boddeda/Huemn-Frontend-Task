import React, { Component } from 'react';
import blocks from '../views/blocks';
import BlockPreview from "../components/BlockPreview";
import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  handleChangeSearchValue = (newValue) => {
    this.setState({ searchValue: newValue });
  };

  render() {
    if (!this.props.display) return null;

    const { searchValue } = this.state;
    const filteredBlocks = Object.keys(blocks).filter((blockId) => {
      const block = blocks[blockId];
      return block.name.toLowerCase().includes(searchValue.toLowerCase());
    }).slice(0, 10); // Limit to 10 results

    return (
      <div>
        <input
          type='text'
          className='form-control mb-3 form-control-lg shadow'
          placeholder='Search block component...'
          value={searchValue}
          onChange={(e) => this.handleChangeSearchValue(e.target.value)}
        />
        <hr />
        <div>
          {filteredBlocks.map((blockId) => {
            const block = blocks[blockId];
            return (
              <BlockPreview
                key={blockId}
                name={block.name}
                blockId={blockId}
                image={block.previewImageUrl}
                onPushBlock={this.props.onPushBlock}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
