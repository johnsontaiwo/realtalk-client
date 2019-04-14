import React, { Component } from 'react';
import ArticleContainer from './Components/ArticlesContainer';
import ArticleInput from './Components/ArticleInput';
import Article from './Components/Article';
import Articles from './Components/Articles';
import Comment from './Components/Comment';
import UserRegistration from './Components/UserInput';
import LoginPage from './Components/LoginPage';
import usersContainer from './Components/UserContainer';
import User from './Components/User';
import CommentContainer from './Components/CommentsContainer';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home


class Routes extends  Component {
  

// navLinks = () => {
//   if (userLoggedIn()) {
//     <div className="App">
//        <ul>
//        <li>
//         <Link to='/' className="Home">Home</Link>
//         </li>
        
//         <li>
//         <Link to='/userRegistration' className="UserRegistration">Sign Up</Link> |
//         <Link to='/userLogin' className="UserLogin">Login</Link> | 
//         <Link to='/logout' className="UserLogin">Logout</Link>  
//         </li>
        
//         <li>
//         <Link to='/articles' className="articlesIndex">Articles</Link>
//         </li>
//         <li>
//         <Link to='/User' className="userProfile">Your profile</Link>
//         </li>
//       </ul>
//   }
// }
// </div>

  render() {
    return(
     //this.navLinks()
      )
  }
}

const userLoggedIn = () =>  !!sessionStorage['jwt']


const userLoggedout = () => {
  if(sessionStorage['jwt']) sessionStorage.removeItem('jwt')

  return <Redirect to="/userLogin"/>
}

export default Routes