import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleInput from './ArticleInput';
import Articles from  './Articles'
import { fetchArticles } from '../Actions/actionCreators'


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
  return ({
    articles: state.articles
  })
 }


const mapDispatchToProps = dispatch => ({
  addArticle: title => dispatch({ type: "ADD_ARTICLE", title}),
  deleteArticle: id => dispatch({ type: "DELETE_ARTICLE", id})
})

export default connect(mapStateToProps, { fetchArticles })(ArticleContainer)