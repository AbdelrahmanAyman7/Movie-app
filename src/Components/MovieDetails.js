import React, { Fragment, useState, useEffect } from 'react';
import styles from './Details.module.css';
import { Link } from 'react-router-dom';

const MovieDetails = (props) => {
  const [movie, setMovie] = useState([]);  

    useEffect(() => {
      setMovie([props.myDetails])
    
    },[props.myDetails])
     
    return (
        <Fragment>
        {movie.map(moviee => {
           return (
              <div> 
              <Link className = {styles.goBack} to = "/App">
               <h1>Netflix</h1> 
              </Link>

              <div className = {styles.myContainer}> 
              <div key = {moviee.index} className = {styles.myMovie}> 
              <div  className = {styles.myMovieRating}>
              <span>{moviee.vote_average}</span>
              </div>
              <div className = {styles.myImage}>
              <img  src = {"https://image.tmdb.org/t/p/w500/"+ moviee.poster_path}  alt ='movie' />
              
              <div className = {styles.myMovieInfo}>
              <h2>{moviee.original_title}</h2>
              <div>{moviee.original_name}</div>
              </div>
              </div>
              <div className = {styles.myMovie_overview}>
              <h2 id = {styles.myHead}>Overview</h2> 
              <p>{moviee.overview}</p>
              </div>
              </div>
              </div>
              </div>
                )
        })}
        </Fragment>
    )
}

export default MovieDetails