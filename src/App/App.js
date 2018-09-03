import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const movie = {
      title: 'The Lord of the Rings: The Fellowship of the Ring'
    }

    this.state = {
      movie: movie
    }
  }

  render() {
    return (
      <div className="movie-title">{this.state.movie.title}</div>
    );
  }
}

export default App;
