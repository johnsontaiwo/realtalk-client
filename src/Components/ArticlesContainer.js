import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleInput from './ArticleInput';
import Articles from  './Articles'
import { fetchArticles } from '../Actions/actionCreators'
import Article from './Article'


class ArticleContainer extends  Component {

componentDidMount() {
  this.props.fetchArticles()
 }

  render() {
    return(
     <div>
    <Articles articles={this.props.articles} deleteArticle={this.props.deleteArticle} />
    <ArticleInput addArticle={this.props.addArticle} />
    </div>
    )
  }
}
      

  

const mapStateToProps = (state) => { 
  return ({
    articles: state.articles
  })
 }



export default connect(mapStateToProps, { fetchArticles })(ArticleContainer)