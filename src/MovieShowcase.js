import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    //console.log(movieData)
    return movieData.map((movieSrc, keyValue) => 

      <MovieCard
        key={keyValue}
        title={movieSrc.title}
        IMDBRating={movieSrc.IMDBRating}
        genres={movieSrc.genres}
        poster={movieSrc.poster} />
    
    )
  }
  render() {
    return (
      <div id="movie-showcase">
        
        {this.generateMovieCards()}
      </div>
    )
  }
}
