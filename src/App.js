import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieHeading from './Components/MovieHeading';
import MovieList from './Components/MovieList';
import styles from './Components/Movies.module.css';
import SearchBox from './Components/SearchBox';
import Login from './Components/Login';
import Signup from './Components/Signup';
import MovieDetails from './Components/MovieDetails';

const App = () => {
 
  const [movies, setMovies] = useState([]); 
  const [searching, setSearching] = useState('');
  const [Movie_Details, setMovie_Details] = useState([]);
  
  const Movie_Details_Fun = (movie) => {
    setMovie_Details(movie)
  }

   useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=779406bd4d6161eabbd9ce764d178708`)
    .then(res => {
      setMovies(res.data.results) 

    })

 },[searching])

// Search for movies
  const searchMovies = () => {
   if(searching.length === 0){  
      return movies
   }
   else return movies.filter(movie => {
     return movie.title ? movie.title.toLowerCase().includes(searching) : movie.name.toLowerCase().includes(searching)
   })
 }
  return (
    <Fragment>
    <Router> 
    <Switch>
    <Route path = "/Login" exact component = {Login}/>
    <Route path = "/Signup" exact component = {Signup}/>
    <Route path = "/MovieDetails/:id" exact  render = {(props) => <MovieDetails myDetails = {Movie_Details} {...props} /> }></Route> 
    <div className = {styles.headcontainer}>
    <div>
    <MovieHeading heading = 'Netflix' myLogin = 'Login' mySign = 'Signup'/>
    <SearchBox searching = {searching} setSearching = {setSearching}/>
    </div>
    
    <div className = {styles.mainContainer}>
     <MovieList movies = {searchMovies()} detail={Movie_Details_Fun} ></MovieList>
    </div>
    </div>
    </Switch>
    </Router>
    
    </Fragment>
  );
};

export default App 