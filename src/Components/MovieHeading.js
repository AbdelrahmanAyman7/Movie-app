import React from 'react';
import styles from './Movies.module.css';

const MovieHeading = (props) => {
  
    return (
        <div className = {styles.headContainer}>
          <h1>{props.heading}</h1> 
          <div className = {styles.myButtons}>
          <button className = {styles.login}>Login</button>
          <button className = {styles.signUp}>Sign Up</button>
          </div> 
        </div>
    )
}

export default MovieHeading
