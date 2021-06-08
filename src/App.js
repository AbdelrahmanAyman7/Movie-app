import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieHeading from './Components/MovieHeading';
import MovieList from './Components/MovieList';
import styles from './Components/Movies.module.css';
import SearchBox from './Components/SearchBox';


const App = () => {
 
  const [movies, setMovies] = useState([]); 
  const [searching, setSearching] = useState('');
  const [view, setView] = useState(false);
   
   
   useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=779406bd4d6161eabbd9ce764d178708`)
    .then(res => {
      setMovies(res.data.results) 

    })
 },[searching,view])

  const searchMovies = () => {
   if(searching.length === 0){  
      return movies
   }
   else return movies.filter(movie => {
     return movie.title ? movie.title.toLowerCase().includes(searching) : movie.name.toLowerCase().includes(searching)
   })
 }
  return (
    <div className = {styles.headcontainer}>
    <div>
    <MovieHeading heading = 'Netflix'/>
    </div>

    <div>
    <SearchBox searching = {searching} setSearching = {setSearching}/>
    </div>

    <div className = {styles.mainContainer}>
     <MovieList movies = {searchMovies()} view = {setView} setView = {setView}></MovieList> 
    </div>
    </div>
  );
};

export default App 