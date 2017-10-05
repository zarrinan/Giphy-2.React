import React, { Component } from 'react';
import Gif from './Gif';

class GifList extends Component {
  render() {
    //console.log(this.props.data)
    return (
      <div>
        {this.props.data.map((oneGif,i) =>
         <Gif oneGif={oneGif} key={i}/> )}
      </div>
    )
  }
}

export default GifList;



