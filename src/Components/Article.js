import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import Articles from './Articles'
import { deleteArticle } from '../Actions/actionCreators'

class Article extends Component {

 

  render() {
    const { article } = this.props
    return(
     <div>
      <li>
      {article.title}
      <button onClick={() => this.props.deleteArticle(this.props.article.id)}>Delete</button>
      </li>
      </div>
    )

  }
}
      
export default Article
       
     
     
      

  





