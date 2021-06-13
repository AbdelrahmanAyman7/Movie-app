import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Movies.module.css';

const MovieHeading = (props) => {
  
    return (    
         <nav id = {styles.MyNav}>
          <div className = {styles.headContainer}>
          
          <h1 id = {styles.mainH}>{props.heading}</h1> 
         
          </div>
      
          <ul className = {styles.nav_links}>
          <Link className = {styles.myLinks} to = "/Login">
          <li>{props.myLogin}</li>
          </Link>

          <Link className = {styles.myLinks} to = "/Signup">
          <li>{props.mySign}</li>
          </Link>
          </ul>
          </nav> 
    )
}

export default MovieHeading
