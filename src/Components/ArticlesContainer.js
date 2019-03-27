import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ArticleInput from './ArticleInput';
import CommentContainer from  './CommentsContainer'
import Articles from  './Articles'
import { fetchArticles, fetchArticle, deleteArticle } from '../Actions/actionCreators'
import { fetchComments, deleteComment } from '../Actions/commentActions'
import Article from './Article'


class ArticleContainer extends  Component {

  
componentDidMount() {
  this.props.fetchArticles()
 }

  render() {
    return(
     <div className="articlesIndex">
    <Articles articles={this.props.articles} deleteArticle={this.props.deleteArticle} fetchArticle={this.props.fetchArticle} />
    </div>
    )
  }
}
  
    
  const mapStateToProps = (state) => {
    return({
      articles: state.articles.articles
    })
  }
   


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchArticles,
  deleteArticle,
  fetchComments,
  fetchArticle,
  deleteComment
}, dispatch)
  

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer)
      
