const initialState = {
  articles: [],
  current: { title: '', content: '',  author_name: '', likes: '',  comment: [] }
}


export default function articlesReducer ( state = initialState, action) {

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

    case "UPDATE_ARTICLE":
    return {...state, current: action.payload}

    case "ADD_LIKE":
    return {...state, current: action.payload}

    case "ADD_COMMENT":
    let current = { ...state.current } 
     current.comment = current.comment.filter(comment => comment.id !== action.payload.id)
     return { ...state, current }
    
    case "DELETE_COMMENT":
     let deletedComment = { ...state.current } 
     deletedComment.comment = deletedComment.comment.filter(comment => comment.id !== action.payload.id)
     return { ...state, current: deletedComment }
    

    default:
      return state
  }
  
}