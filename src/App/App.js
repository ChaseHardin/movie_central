import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const movie = {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      releaseDate: 'December 18, 2001'
    }

    this.state = {
      movie: movie
    }
  }

  render() {
    return (
      <div>
        <div className="movie-title">
          {this.state.movie.title}
        </div>
        <div className="movie-release-date">
          {this.state.movie.releaseDate}
        </div>
      </div>
    );
  }
}

export default App;
