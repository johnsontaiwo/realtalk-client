import  React, { Component } from 'react';
import { upVoteComment, deleteComment } from './Article'
import { updateCount } from './CommentsContainer'
import Article from './Article'


  

class Comment extends Component {
  
  state = {
    likes: 0
  }

   addLike = () => {
    this.setState(prevState => {  
      return {
        likes: prevState.likes + 1
      }
    })

  }


  render() {
const { likes } = this.state
const { articleId, id, content, commentator } = this.props
    return(
    <div>
    <li className="articleComments">
     <h5>Content: {content} </h5>
     <h5>Comment by: {commentator} </h5>
     <h5>Likes: { likes }</h5>
     <button onClick={ this.addLike }>Like</button>
     <button onClick={ () => this.props.deleteComment(articleId, id)}>Delete</button>
  </li>  
     
    </div>

      )
  }

}

export default Comment


// const Comment = ({ comment: { id, content, commentator }, like, addLike, articleId, deleteComment }) => 
//   <li className="articleComments">
//      <h5>Content: {content} </h5>
//      <h5>Comment by: {commentator} </h5>
//      <h5>Likes: { like }</h5>
//      <button onClick={ addLike }>Like</button>
//      <button onClick={ () => deleteComment(articleId, id)}>Delete</button>
//   </li>