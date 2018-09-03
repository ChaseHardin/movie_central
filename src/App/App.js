import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const movie = {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      releaseDate: 'December 18, 2001',
      rating: 82,
      overview: 'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed…'
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
        <div className="movie-rating">
          {this.state.movie.rating}
        </div>
        <div className="movie-overview">
          {this.state.movie.overview}
        </div>
      </div>
    );
  }
}

export default App;
