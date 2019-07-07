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
import Home from './Components/Home'
import Routes from './Routes/routes'





class App extends Component {

  render() { 
    return (
     <div>
     <Routes />
     </div>
    )
  }
}
      

export default App;
