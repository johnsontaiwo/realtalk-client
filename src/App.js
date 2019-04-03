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





class App extends Component {
  render() {
    //debugger
    return (
      <Router >
       <Switch>
       <div className="App">
       <ul>
       <li>
        <Link to='/' className="Home">Home</Link>
        </li>
        
        <li>
        <Link to='/userRegistration' className="UserRegistration">Sign Up</Link> |
        <Link to='/userLogin' className="UserLogin">Login</Link> | 
        <Link to='/logout' className="UserLogin">Logout</Link>  
        </li>
        
        <li>
        <Link to='/articles' className="articlesIndex">Articles</Link>
        </li>
        <li>
        <Link to='/User' className="userProfile">Your profile</Link>
        </li>
      </ul>
     
      <hr />

        <Route exact path='/' component={ () => loggedIn() ? <Home/> : <Redirect to="/userLogin"/>}/>
        <Route  path='/articles' component={ () => loggedIn() ? <ArticleContainer/> : <Redirect to="/userLogin"/>}/>
        <Route  path='/articles/new' component={ArticleInput} />
        <Route  exact path='/articles/:id/comments/:id' component={Article} />
        <Route  path='/userRegistration' component={ () => loggedIn() ? <Redirect to="/"/> : <UserRegistration/>} />
        <Route  path='/userLogin' component={ () => loggedIn() ? <Redirect to='/'/> : <LoginPage/>} />
        <Route  path='/logout' component={ () => logout() }/>
        <Route  path='/users/:id' component={ () => loggedIn() ? <User/> : <Redirect to="/userLogin"/>} />
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

export default App;
