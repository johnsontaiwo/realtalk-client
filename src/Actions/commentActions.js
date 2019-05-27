 import { fetchArticle } from '../Actions/actionCreators'
 const API_URL = 'http://localhost:3001/api/v1'

 export const fetchComments = (article) => {
  const request = new Request(`${API_URL}/articles/${ article.id }/comments`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      'Authorization': `Bearer ${sessionStorage.jwt}`
    },
     
  })
  return dispatch => {
    return fetch(request)
          .then(res => res.json())
          .then(comments => dispatch({
            type: 'GET_COMMENTS',
            payload: comments
          }))
          .catch(error => console.log(error))
  }
}

export const addComment =  (comment, articleId) => {
  let data =  {
     method: "POST",
     headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      'Authorization': `Bearer ${sessionStorage.jwt}`
     },
     body: JSON.stringify({ comment: comment })
  }
  return dispatch => {
    return fetch(`${API_URL}/articles/${ articleId }/comments`, data)
    .then(resp => resp.json)
    .then(comment => dispatch({
      type: "ADD_COMMENT",
      payload: comment
      }),
      dispatch(fetchArticle(articleId)))
    .catch(error => console.log(error))
  }
}

export const addLikeToComment = (comment, articleId) => {
  let data = {
    method: "PUT",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      'Authorization': `Bearer ${sessionStorage.jwt}`
    },
    body: JSON.stringify({ comment: comment})
  }
  return dispatch => {
    return fetch(`${API_URL}/articles/${articleId}/comments`, data)
    .then(resp => resp.json)
    .then(comment => dispatch({
      type: "ADD_LIKE_TO_COMMENT",
      payload: comment
    }),
    dispatch(fetchArticle(articleId)))
    .catch(error => console.log(error))
  }
}

export const deleteComment =  (articleId, commentId) => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }
  return dispatch => {
    fetch(`${API_URL}/articles/${ articleId }/comments/${ commentId }`, data)
      .then(response => response.json())
      .then(comment => dispatch({
        type: "DELETE_COMMENT",
        payload: comment
      }))
      .catch(err => err)
  }
}
  


  
    




  
    