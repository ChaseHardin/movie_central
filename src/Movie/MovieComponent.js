import React, { Component } from 'react';
import './MovieComponent.css';

class MovieComponent extends Component {
  render() {
    return (
        <div className="card" style={{ width: 400 }}>
          <img className="card-img-top" heigt="100" alt="Card image cap" src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/eDkDYEUIHEp5qavNa5k6XsMHgbf.jpg"></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.movie.title}</h5>
            <h6 className="movie-rating">{this.props.movie.rating}</h6>
            <h6 className="movie-release-date">{this.props.movie.releaseDate}</h6>
            <p className="card-text">{this.props.movie.overview}</p>

            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    );
  }
}

export default MovieComponent;
