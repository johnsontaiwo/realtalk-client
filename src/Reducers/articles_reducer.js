const initialState = {
  articles: [],
  current: { title: '', content: '',  author_name: '', comment: [] }
}


export default function articlesReducer ( state = initialState, action) {
  let articles
  let idx 
  let newComment
  let deletedComment
  let current
  switch (action.type) {
    case "CREATE_ARTICLE":
      return {...state, articles: [...state.articles, action.payload] } 

    case "GET_ARTICLES":
      return {...state, articles: action.articles}
    
    case "GET_ARTICLE":
      return {
        ...state, 
        current: action.payload
      }



    case "DELETE_ARTICLE":
    return {...state, articles: state.articles.filter(article => article.id !== action.payload.id)}

    case "ADD_COMMENT":
    //return {...state, articles: [...state.articles, action.payload]}
    current = { ...state.current } 
     current.comment = current.comment.filter(comment => comment.id !== action.payload.id)
     return { ...state, current }
    // return {
    //     ...state, 
    //     current: action.payload
    //   }

    case "DELETE_COMMENT":
     current = { ...state.current } 
     current.comment = current.comment.filter(comment => comment.id !== action.payload.id)
     return { ...state, current }
    
    default:
      return state
  }

}