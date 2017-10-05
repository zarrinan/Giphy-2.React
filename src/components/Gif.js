import React, { Component } from 'react';

class Gif extends Component {

  render() {
    console.log(this.props.oneGif)
    return(

      <div className='gifs'>

      <img src={this.props.oneGif.images.downsized.url} />

      </div>

      )
  }
}

export default Gif;
