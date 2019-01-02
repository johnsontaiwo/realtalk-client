import React, { Component } from 'react';
import ArticleContainer from './Components/ArticlesContainer';
import ArticleInput from './Components/ArticleInput';
import Article from './Components/Article';
import UserRegistration from './Components/UserInput';
import LoginPage from './Components/LoginPage';
import usersContainer from './Components/UserContainer';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'



class App extends Component {
  render() {
    //debugger
    return (
      <Router >
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
        <Link to='/articles/new' className="articlesIndex">Create an article</Link>
        </li>
      </ul>
     
      <hr />

        <Route exact path='/' component={Home} />
        <Route path='/articles' component={ () => loggedIn() ? <ArticleContainer/> : <Redirect to="/userLogin"/>}/>
        <Route exact path='/articles/new' component={ArticleInput} />
       
        <Route path='/userRegistration' component={ () => loggedIn() ? <Redirect to="/"/> : <UserRegistration/>} />
        <Route  path='/userLogin' component={ () => loggedIn() ? <Redirect to='/'/> : <LoginPage/>} />
        <Route path='/logout' component={ () => logout() }/>
        <Route  path='/users' component={usersContainer} />
        </div>
      </Router >
    );
  }
}
// ? <Redirect to='/'/> : <LoginPage/>}
// <li>
//         <Link to='/articles' className="articlesIndex">Articles</Link>
//         </li>
//         <li>
//         <Link to='/articles/new' className="articlesIndex">Create an article</Link>
//         </li>
//         <li>
//         <Link to='/users' className="articlesIndex">Users</Link>
//         </li>

///<li>
        
           ///<li>
        // //<Link to='/users' className="articlesIndex">Users</Link>
        // </li>
//Route exact path='/articles/:id' component={Article} />
const loggedIn = () =>  !!sessionStorage['jwt']


const logout = () => {
  if(sessionStorage['jwt']) sessionStorage.removeItem('jwt')

  return <Redirect to="/userLogin"/>
}

export default App;
