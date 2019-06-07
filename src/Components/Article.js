import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Articles from './Articles';
import CommentContainer from  './CommentsContainer';
import CommentInput from  './CommentInput';
import Comment from './Comment';
import { fetchComments, deleteComment, addLikeToComment } from '../Actions/commentActions';
import { deleteArticle, fetchArticle, addLike } from '../Actions/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import User from './User'




class Article extends Component {
  

    addLikes = () => {
      this.props.article.likes++
      const {id, likes, title, author_name} = this.props.article
      this.props.addLike(this.props.article)
    }
    
    
    componentDidMount() {
      this.props.fetchArticle(this.props.match.params.id)
    }


  render() {
    const article = this.props.article 
    const allComments = this.props.article.comment && this.props.article.comment.map(comment => {
        return <Comment 
          key={ comment.id } 
          comment={ comment } 
          articleId={article.id} 
          addLikeToComment={this.props.addLikeToComment}
          deleteComment={this.props.deleteComment}
          fetchArticle={this.props.fetchArticle} 
         />
      })
      
    return(
     <div className='articleInfo'>
     <ul>
     <li key={article.id}>
      <h5>Title: {article.title} </h5>
      <h5>Content: {article.content} </h5>
      <h5>Author: {article.author_name} </h5>
      <h5>Like: {article.likes} </h5>
      <button onClick={() => {this.addLikes()}}>Like</button>
      <h5>Comments: { allComments } </h5>
      <CommentInput article={article} articleId={this.props.article.id} />
      </li>
      </ul>
    </div>
  )}
}


  const mapStateToProps = (state) => {
    return ({
      article: state.articles.current
    })
  }

      

 const mapDispatchToProps = dispatch => bindActionCreators({
  fetchArticle, deleteArticle, deleteComment, fetchComments, addLike, addLikeToComment
 }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Article)
 

