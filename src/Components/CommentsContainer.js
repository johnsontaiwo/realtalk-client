import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addComment, fetchComments, deleteComment } from '../Actions/commentActions'
import CommentInput from './CommentInput';
import Comments from  './Comments'
import Article from './Article'

class CommentContainer extends  Component  {
 
 // componentDidMount() {
 //  this.props.fetchComments()
 // }

render() {
  
//debugger
  return (
    <div>
      <CommentInput addComment={this.props.addComment} articleId={this.props.article.id} />
      <Comments comments={this.props.comments} deleteComment={this.props.deleteComment} />
    </div>


    )
  }
}


const mapStateToProps = (state) => {
    return({
      comments: state.comments
    })
  }

const mapDispatchToProps = dispatch => bindActionCreators({
  addComment,
  fetchComments,
  deleteComment
}, dispatch)



 export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)