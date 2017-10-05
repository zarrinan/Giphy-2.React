import React, { Component } from 'react';

class AddGifForm extends Component {
  render() {
    return (
      <form className="add-gif-form"
            onSubmit={this.props.handleSearchSubmit}
      >
      <input className='inputField'
            type="text"
            value={this.props.inputSubjectValue}
            name="subject"
            placeholder="gif subject"
            onChange={this.props.handleInputSubjectChange}
      />
      <input className='inputField'
            type="text"
            value={this.props.inputNumberValue}
            name="number"
            placeholder="number"
            onChange={this.props.handleInputNumberChange}
      />
      <button id="submit">Search</button>
      </form>
      );
  }
}

export default AddGifForm;
