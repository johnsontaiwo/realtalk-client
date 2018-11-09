const API_URL = 'http://localhost:3001/api/v1'

export const getArticles = articles => {
  return {type: "GET_ARTICLES",
  articles
 }
}


export const fetchArticles = () => {
  return dispatch => {
    return fetch(`${API_URL}/articles`)
          .then(res => res.json())
          .then(articles => dispatch(getArticles(articles)))
          .catch(error => console.log(error))
  }
}
