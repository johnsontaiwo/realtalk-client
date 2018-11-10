import  React, { Component }  from 'react';
import Article from './Article';
import ArticleContainer from './ArticlesContainer'

class Articles extends Component {
  render() {
  const allArticles = this.props.articles.map(article => <Article key={article.id} article={article} deleteArticle={this.props.deleteArticle} />)
  
  return(
    <div>
    
    </div>
    )
  }
}

export default Articles

