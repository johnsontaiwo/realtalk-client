export default function commentsReducer ( state = {
comments: []
}, action){

switch (action.type) {
  case "GET_COMMENTS":
  return {...state, comments: [...state.comments, action.payload]}

   default:
    return state
  }
}