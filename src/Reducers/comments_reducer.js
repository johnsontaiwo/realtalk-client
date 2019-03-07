export default function commentsReducer ( state = {
comments: []
}, action){

switch (action.type) {
  case "GET_COMMENTS":
  return {...state, comments: [...state.comments, action.payload]}
   
  // case "ADD_COMMENT":
 
  // const newComment = {
  //   content: action.content,
  //   commentator: action.commentator,
  //   articleId: action.articleId,
  // }
  // return {...state, articles: [...state.articles, action.payload]}
 
  // case "DELETE_COMMENT":
  // return {...state, comments: state.comments.filter(comment => comment.id !== action.payload.id)}


   default:
    return state
  }
}