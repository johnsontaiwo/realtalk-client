import  React, { Component }  from 'react';
import Article from './Article';
import Comments from './Comments';
import ArticleContainer from './ArticlesContainer'
import ArticleInput from './ArticleInput'
import CommentContainer from  './CommentsContainer'
import { Link } from 'react-router-dom'
import SingleArticle from './singleArticleShow'

class Articles extends Component {
 
  render(){
    const { articles } = this.props
    return (
      <div className="articlesIndex">
      <ul>
        { 
          articles.map(article => {
            return <li key={ article.id }><Link to={ `/articles/${ article.id }` }>{ article.title } </Link> 
                    <button onClick={() => this.props.deleteArticle(article.id)}>Delete</button>
                   </li>
          })
        }
       <p> <ArticleInput /> </p>
      </ul>
      </div>
    )
  }
}
   
  
export default Articles


