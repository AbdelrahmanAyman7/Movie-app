import React, { Fragment } from 'react';
import styles from './Movies.module.css';


const MovieList = (props) => {

    return (
        <Fragment>
           {props.movies.map((movie) => (
            <div  key = {movie.id} className = {styles.movie}>
            <div  className = {styles.movieRating}>
            <span>{movie.vote_average}</span>
            </div>
            <img  src = {"https://image.tmdb.org/t/p/w500/"+ movie.poster_path}  alt ='movie' />
            
            <div className = {styles.movieInfo}>
             <h2>{movie.original_title}</h2>
             <h2>{movie.name}</h2>
             
            <div className = {styles.movie_overview}>
            <h2>Overview</h2> 
            <p>{movie.overview}</p>
            </div>
            </div> 
            </div>
            ))}
       </Fragment>
    );
};

export default MovieList
