import  React  from 'react';


const Comment = ({ comment: { id, content, commentator }, articleId, deleteComment }) =>  
<li className="articleComments">
   <h5>Content: {content}</h5>
   <h5>Comment by: {commentator}</h5>
   <button onClick={ () => deleteComment(articleId, id)}>Delete</button>
</li>  

export default Comment