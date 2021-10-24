import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Signup from './Signup';
import styles from './Movies.module.css';
import App from '../App';

const Login = (props) => {
    return (
       <Fragment>
        <Router>
        <Switch>
        <Route path = "/App" exact component = {App}></Route>
        <Route path = "/Signup" exact component = {Signup}/>
        <div className = {styles.LoginInfo}>
        <div className = {styles.HomePage}>
         <Link className = {styles.SignAndLog} to = "/App">
         <h1>Netflix</h1> 
         </Link>
        </div>
         <form className = {styles.LogInfo}>

         <label>Username<br/>or Email</label>
         <input type = "text"></input>

         <label>Password</label>
         <input type = "password"></input>

         <button className = {styles.Log}>Login</button> 
         <div className = {styles.SignHere}>
         <span>Don't have an account ?</span>
         <Link className = {styles.SignLink} to = "/Signup"> 
         <li>Signup</li>
         </Link>
         </div>
         </form>

        </div>
        </Switch>
        </Router>
        </Fragment>
    )
}

export default Login
