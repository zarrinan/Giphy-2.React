import React, { Component } from 'react';

import axios from 'axios';
import './App.css';
import GifList from './components/GifList';
import AddGifForm from './components/AddGifForm'



class App extends Component {
  constructor(){
    super();
    this.state = {
     apiData: [],
     inputSubjectValue: '',
     inputNumberValue: '',

    }
    this.handleInputSubjectChange = this.handleInputSubjectChange.bind(this);
    this.handleInputNumberChange = this.handleInputNumberChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

// componentDidMount() {
//   axios('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=85106578d15c4d968f3ee5e48e336e47')
//   .then(res => {
//      console.log(res)
//     this.setState(prevState => {
//      return  { apiData: res.data.data,
//        }
//     });
//   });
// }

handleInputSubjectChange(event) {
  this.setState({
    inputSubjectValue: event.target.value
  });
}

handleInputNumberChange(event) {
  this.setState({
    inputNumberValue: event.target.value
  });
}

handleSearchSubmit(event) {
  event.preventDefault();
  let url = `http://api.giphy.com/v1/gifs/search?q=${this.state.inputSubjectValue}&api_key=85106578d15c4d968f3ee5e48e336e47&limit=${this.state.inputNumberValue}`;
  console.log(this.state.inputSubjectValue);
  console.log(this.state.inputNumberValue);
  axios(url)
  .then(res => {
    console.log(res)
    this.setState((prevState) => {
     return { apiData: res.data.data,
     }
   })
  }).catch(err => console.log(err));
}

  render() {
    return (

    <div className="App">
    <div className='headder'> <h1>Giphy Search App</h1></div>
    <AddGifForm
             handleInputSubjectChange={this.handleInputSubjectChange}
             handleInputNumberChange={this.handleInputNumberChange}
             handleSearchSubmit={this.handleSearchSubmit}
             inputSubjectValue={this.state.inputSubjectValue}
             inputNumberValue={this.state.inputNumberValue} />
    <GifList data={this.state.apiData} />
    </div>
    );
  }
}

export default App;
