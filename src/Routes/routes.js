import React, { Component } from 'react';
import ArticleContainer from '../Components/ArticlesContainer';
import ArticleInput from '../Components/ArticleInput';
import Article from '../Components/Article';
import Articles from '../Components/Articles';
import Comment from '../Components/Comment';
import UserRegistration from '../Components/UserInput';
import LoginPage from '../Components/LoginPage';
import usersContainer from '../Components/UserContainer';
import User from '../Components/User';
import CommentContainer from '../Components/CommentsContainer';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect, Switch } from 'react-router-dom';
import Home from '../Components/Home'

class Routes extends Component {

  // userLoggedIn = () => {
  //   if(loggedIn()) 
  //   return <li>
  //      <Link to='/logout' className="UserLogin">Logout</Link> |
  //      <Link to='/user' className="userProfile">Your profile</Link>
  //     </li> 
  //   } 
  
  // userNotLoggedIn = () => {
  //       if(!loggedIn()) 
  //       return <li>
  //       <Link to='/userRegistration' className="UserRegistration">Sign Up</Link> 
        
  //       </li>
  //      }  
//
  render() { 
    return (
      <Router >
        <Switch>
       <div className="App">
       
       <ul>
       <li>
        <Link to='/' className="Home">Home</Link>
         </li>
       </ul>
       
      <hr />

        <Route exact path='/' component={ () => loggedIn() ? <Home /> : <Redirect to="/userLogin"/>}/>
        <Route  path='/articles' component={ () => loggedIn() ? <ArticleContainer/> : <Redirect to="/userLogin"/>}/>
        <Route  path='/articles/new' component={ArticleInput} />
        <Route  exact path='/articles/:id/comments/:id' component={Article} />
        <Route  path='/userRegistration' component={ () => loggedIn() ? <Redirect to="/"/> : <UserRegistration/>} />
        <Route  path='/userLogin' component={ () => loggedIn() ? <Redirect to='/'/> : <LoginPage/>} />
        <Route  path='/logout' component={ () => logout() }/>
        <Route  path='/user' component={ () => loggedIn() ? <User /> : <Redirect to='/'/>} />
        <Route  path='/users/:id/articles/' component={ () => loggedIn() ? <User/> : <Redirect to="/userLogin"/>} />
        <Route  path='/users' component={usersContainer} />
        <Route exact path='/articles/:id' render={(props) => ( <Article key={props.match.params.id} {...props} />)} />

        </div>
       </Switch>
      </Router >

    );
  }
}
         

        
     

const loggedIn = () =>  !!sessionStorage['jwt']


const logout = () => {
  if(sessionStorage['jwt']) sessionStorage.removeItem('jwt')

  return <Redirect to="/userLogin"/>
}

export default Routes
