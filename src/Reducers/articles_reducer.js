//import { browserHistory, withRouter }  from 'react-router';

export default function articlesReducer ( state = {
articles: []
}, action){

  switch (action.type) {
    case "CREATE_ARTICLE":
    
    return {...state, articles: [...state.articles, action.payload] } 

    case "GET_ARTICLES":
     return {...state, articles: action.articles}
    
    case "GET_ARTICLE":
     return {...state, articles: action.article}

     case "DELETE_ARTICLE":
      
     return {...state, articles: state.articles.filter(article => article.id !== action.payload.id)}
     
    default:
      return state
  }

}