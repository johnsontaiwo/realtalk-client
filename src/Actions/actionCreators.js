const API_URL = 'http://localhost:3001/api/v1'

export const getArticles = articles => {
  return {type: "GET_ARTICLES",
  articles
 }
}
 
export const fetchArticles = () => {
  const request = new Request(`${API_URL}/articles`, {
    method: "GET",
    headers: new Headers({
      'Accept': 'application/json',
      "Content-Type": "application/json",
      'Authorization': `Bearer ${sessionStorage.jwt}`
    }),
     
  })
  return dispatch => {
    return fetch(request)
          .then(res => res.json())
          .then(articles => dispatch(getArticles(articles)))
          .catch(error => console.log(error))
  }
}

export const fetchArticle = (id) => {
  const request = new Request(`${API_URL}/articles/${id}`, {
    method: "GET",
    headers: new Headers({
      'Accept': 'application/json',
      "Content-Type": "application/json",
      'Authorization': `Bearer ${sessionStorage.jwt}`
    }),
  })
  return dispatch => {
    return fetch(request)
          .then(res => res.json())
          .then(article => dispatch({
            type: 'GET_ARTICLE',
            payload: article
          }))
          .catch(error => console.log(error))
  }
}
     
export const addArticle = article => {
     let data = { 
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": sessionStorage.jwt
      },
      body: JSON.stringify({ article })
        
    }
  return dispatch => {
    return fetch(`${API_URL}/articles`, data)
     .then(response => response.json())
     .then(article => dispatch({
      type: 'CREATE_ARTICLE',
      payload: article
     })) 
     .catch(error => console.log(error))
  }
}

export const deleteArticle = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }
  return dispatch => {
    fetch(`${ API_URL }/articles/${ id }`, data)
      .then(response => response.json())
      .then(article => dispatch({
        type: 'DELETE_ARTICLE',
        payload: article
      }))
      .catch(err => err)
  }
}

  
    


 



  





