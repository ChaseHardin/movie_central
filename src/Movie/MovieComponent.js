import React, { Component } from 'react';
import './MovieComponent.css';

class MovieComponent extends Component {
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
        <div className="card" style={{ width: 400 }}>
          <img className="card-img-top" heigt="100" src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/eDkDYEUIHEp5qavNa5k6XsMHgbf.jpg" alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">{this.state.movie.title}</h5>
            <h6 className="movie-rating">{this.state.movie.rating}</h6>
            <h6 className="movie-release-date">{this.state.movie.releaseDate}</h6>
            <p className="card-text">{this.state.movie.overview}</p>

            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    );
  }
}

export default MovieComponent;
