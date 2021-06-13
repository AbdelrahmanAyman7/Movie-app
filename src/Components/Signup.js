import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from '../App';
import Login from './Login';
import styles from './Movies.module.css';

const Signup = (props) => {
    return (

       <Fragment>
        <Router>
        <Switch>
        <Route path = "/App" exact component = {App}></Route>
        <Route path = "/Login" exact component = {Login}/>
        <div className = {styles.SignupInfo}>
         <div className = {styles.HomePage}>
         <Link className = {styles.SignAndLog} to = "/App">
          <h1>Netflix</h1> 
         </Link>
         </div>
         <form className = {styles.myInfo}>
         <label>Firstname</label>
         <input type = "text"></input>

         <label>Lastname</label>
         <input type = "text"></input>

         <label>Email</label>
         <input type = "text"></input>

         <label>Password</label>
         <input type = "password"></input>

         <button className = {styles.Register}>Register</button>
         
         <div className = {styles.LoginHere}>
         <span>Already have an account ?</span>
         <Link className = {styles.logLink} to = "/Login"> 
         <li>Login</li>
         </Link>
         </div>
         </form>
         

        </div>
    </Switch>
    </Router>
    </Fragment>
    )
}

export default Signup
