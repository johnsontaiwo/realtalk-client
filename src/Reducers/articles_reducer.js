export default function articlesReducer ( state = {
articles: []
}, action){

  switch (action.type) {
    case 'ADD_ARTICLE':

    const article = {
      id: state.id,
      title: action.title
    }
    return {...state, articles: action.article} 

    case "GET_ARTICLES":
     return {...state, articles: action.articles}
    
    default:
      return state
  }

}