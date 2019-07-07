import  React, { Component }  from 'react';
import Article from './Article';
import Comments from './Comments';
import ArticleContainer from './ArticlesContainer'
import ArticleInput from './ArticleInput'
import CommentContainer from  './CommentsContainer'
import { Link } from 'react-router-dom'

class Articles extends Component {
 
  render(){
    const { articles } = this.props
    return (
      <div className="articlesIndex">
      <ul>
        { 
          articles.map(article => {
            return <li key={ article.id }><Link to={ `/articles/${ article.id }` }>{ article.title } </Link> </li>
          })
        }
       <p> <ArticleInput /> </p>
       <nav className="navbar navbar-default navbar-static-top">
        <li>
       <Link to='/logout'>Logout</Link> |
       <Link to='/user' className="userProfile">Your profile</Link>
      </li> 
      </nav>
      </ul>
      </div>
    )
  }
}
        
   
  
export default Articles

