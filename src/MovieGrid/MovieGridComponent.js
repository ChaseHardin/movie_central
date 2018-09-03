import React, { Component } from 'react';
import './MovieGridComponent.css';
import MovieComponent from '../Movie/MovieComponent';

class MovieGridComponent extends Component {
    constructor(props) {
        super(props);

        this.state={};

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
                <MovieComponent movie={this.state.movie}/>
            </div>
        );
    }
}

export default MovieGridComponent;