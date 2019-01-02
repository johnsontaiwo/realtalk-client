import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ArticleInput from './ArticleInput';
import Articles from  './Articles'
import { fetchArticles, deleteArticle } from '../Actions/actionCreators'
import Article from './Article'


class ArticleContainer extends  Component {

  
componentDidMount() {
  this.props.fetchArticles()
 }

  render() {
    return(
     <div>
    <ArticleInput addArticle={this.props.addArticle} />
    <Articles articles={this.props.articles} deleteArticle={this.props.deleteArticle} />
    </div>
    )
  }
}
      

  const mapStateToProps = (state) => {
    return({
      articles: state.articles
    })
  }


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchArticles,
  deleteArticle
}, dispatch)
  

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer)