import  React, { Component }  from 'react';
import Article from './Article';
import ArticleContainer from './ArticlesContainer'
import { Link } from 'react-router-dom'

class Articles extends Component {

 //const allArticles = this.props.articles.articles.map(article => <Article key={article.id} article={article} title={article.title}  deleteArticle={this.props.deleteArticle} />)
  render() {
  const allArticles = this.props.articles.articles.map(article => <Article key={article.id} article={ article }  deleteArticle={this.props.deleteArticle} />)
  return(
    <div>
    {allArticles}
    </div>
    )
  }
}

 export default Articles


