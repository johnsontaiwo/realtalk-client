import React, { Component } from 'react';
import { addComment } from '../Actions/commentActions';
import { fetchArticle } from '../Actions/actionCreators';
import { connect } from 'react-redux';
import { browserHistory, withRouter }  from 'react-router';
import { bindActionCreators } from 'redux';


class CommentInput extends  Component  {

  state = {
     
      content: '',
      commentator: ''
  }
      
    

  handleChange = event => {
    const { name, value } = event.target
    event.preventDefault()
    this.setState({
     [name]: value }
    )
  }

  handleOnSubmit = event => {
    const  c  = this.state
    event.preventDefault()
    const { articleId } = this.props
    if (c.content && c.commentator) {this.props.addComment(this.state, articleId)}
    this.props.fetchArticle(articleId)
    this.setState({
      content: '',
      commentator: ''
    })
  }
    
  


render() {
  const { content, commentator } = this.state
  return (
    <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input type="text" placeholder="comment" name="content" value={ content } onChange={(event) => this.handleChange(event)} />
        <input type="text" placeholder="comment by" name="commentator" value={ commentator } onChange={(event) => this.handleChange(event)} />
       <input type="submit" />
      </form>
    </div>
    )
  }
}
        
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addComment, fetchArticle }, dispatch);
};

export default withRouter(connect(null, mapDispatchToProps)(CommentInput))
     
    
    
     






