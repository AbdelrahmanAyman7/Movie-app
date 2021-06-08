import React from 'react';
import styles from './Movies.module.css';

const SearchBox = (props) => {
  
    return (
        <div className = {styles.headContainer}>
          <input type = 'text' placeholder = "Type to search.."
           value = {props.value}
           onChange = {(e)=> props.setSearching(e.target.value)}></input>  
        </div>
    )
}

export default SearchBox