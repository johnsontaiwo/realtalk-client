import React, { Component } from 'react';
import ArticleContainer from './Components/ArticlesContainer';
import UserRegistration from './Components/UserInput';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
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
        <Link to='/articles' className="articlesIndex">Articles</Link>
        </li>
        <li>
        <Link to='/userRegistration' className="UserRegistration">Sign Up</Link>
        </li>
      </ul>
     
      <hr />

        <Route exact path='/' component={Home} />
        <Route exact path='/articles' component={ArticleContainer} />
        <Route  path='/userRegistration' component={UserRegistration} />
        </div>
      </Router >
    );
  }
}

export default App;
