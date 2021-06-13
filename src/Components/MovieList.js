import React, { Fragment,useState } from 'react';
import styles from './Movies.module.css';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
  const[state, setstate] = useState("")

  const Show_index=(index) => {
    console.log(state)   
    setstate(index)
    props.detail(props.movies[index])

 }

    return (
        <Fragment>
           {props.movies.map((movie,index) => (
            <div onClick={() => Show_index(index)} key = {movie.id} className = {styles.movie}> 
            <div  className = {styles.movieRating}>
            <span>{movie.vote_average}</span>
            </div>
            
            <Link to = {`/MovieDetails/${movie.id}`}>
            <img  src = {"https://image.tmdb.org/t/p/w500/"+ movie.poster_path}  alt ='movie' />
            </Link>
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
