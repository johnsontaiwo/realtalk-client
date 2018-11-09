import React, { Component } from 'react';
import ArticleContainer from './Components/ArticlesContainer';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'



class App extends Component {
  render() {
    //debugger
    return (
      <Router >
       <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path='/articles' component={ArticleContainer} />
        <Link to='/articles' className="articlesIndex">Articles</Link>
       </div>
      </Router >
    );
  }
}

export default App;
