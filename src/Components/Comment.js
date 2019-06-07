import  React, { Component } from 'react';
import { upVoteComment, deleteComment } from './Article'
import { updateCount } from './CommentsContainer'
import Article from './Article'
import { addLikeToComment } from '../Actions/commentActions';
import { deleteArticle, fetchArticle, addLike } from '../Actions/actionCreators';


  

class Comment extends Component {
  

 addLikesToComment = () => {
  this.props.comment.like++
  const { articleId, comment } = this.props
  this.props.addLikeToComment(articleId, comment)
  this.props.fetchArticle(articleId)
 }

  render() {
    const { deleteComment, addLikeToComment } = this.props
    const { id, content, commentator, like } = this.props.comment
    return(
      <div>
        <li className="articleComments">
         <h5>Content: { content } </h5>
         <h5>Comment by: { commentator } </h5>
         <h5>Likes: { like }</h5>
         <button onClick={ () => {this.addLikesToComment()} }>Like</button>
         <button onClick={ () => deleteComment(this.props.articleId, id)}>Delete</button>
        </li>  
      </div>
    )
  }
}      
    
 
export default Comment
    
    

// //state = {
  //   likes: 0
  // }
  //const { likes } = this.state
   // addLike = () => {
   //  this.setState(prevState => {  
   //    return {
   //      likes: prevState.likes + 1
   //    }
   //  })
  // }

  // addLike = () => {
    
  //   const comment = this.props.comment
  //   comment.like++
  //     this.props.addLikeToComment(comment, this.props.articleId)
  // }


  ////<button onClick={ () => this.props.deleteComment(articleId, id)}>Delete</button>

// //const Comment = ({ comment: { id, content, commentator, like }, addLike, articleId, deleteComment, addLikeToComment, comment }) => 
//   <li className="articleComments">
//      <h5>Content: {content} </h5>
//      <h5>Comment by: {commentator} </h5>
//      <h5>Likes: { like + 1 }</h5>
//      <button onClick={ () => addLikeToComment(articleId, comment) }>Like</button>
//      <button onClick={ () => deleteComment(articleId, id)}>Delete</button>
//   </li>


    
