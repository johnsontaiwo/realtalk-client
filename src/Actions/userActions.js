const API_URL = 'http://localhost:3001/api/v1'
 
 export const loginUser = (user, callback) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }

  return dispatch => {
    fetch(`${ API_URL }/users/login`, data)
       .then(handleResponse)
      .then(user => {
        if (user.jwt) {
        sessionStorage.setItem('jwt', user.jwt)
        //debugger
        dispatch({
          type: 'SET_USER',
          payload: user.current
        })}


        callback()
      })
      .catch(err => err)
  }
}

export const signupUser = (user, callback) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }

  return dispatch => {
    fetch(`${ API_URL }/users/signup`, data)
      .then(handleResponse)
      .then(user => {
        if (user.jwt) {
        sessionStorage.setItem('jwt', user.jwt)
        //debugger
        dispatch({
          type: 'SET_USER',
          payload: user.current
        })}


        callback()
      })
      .catch(err => err)
  }
}

export const fetchUser = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ API_URL }/users/user`, data)
      .then(response => response.json())
      .then(user => {
        dispatch({
          type: 'SET_USER',
          payload: user
        })
      })
      .catch(err => err)
  }
}

export const deleteUser = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`${ API_URL }/users/${ id }`, data)
      .then(response => response.json())
      .then(user => dispatch({
        type: 'DELETE_TODO',
        payload: user
      }))
      .catch(err => err)
  }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

// const authRequest = () => {
//   return {
//     type: "AUTHENTICATION_REQUEST"
//   }
// }

// const authSuccess = (user, token) => {
//   return {
//     type: "AUTHENTICATION_SUCCESS",
//     user: user,
//     token: token
//   }
// }

// const authFailure = (errors) => {
//   return {
//     type: "AUTHENTICATION_FAILURE",
//     errors: errors
//   }
// }

// export const addUser = (user) => {
//   return {type: "CREATE_USER",

//   user       
//  }
// }

export const getUsers = users => {
  return {type: "GET_USERS",
  users
  } 
}

export const fetchUsers = () => {
  const request = new Request(`${API_URL}/users`, {
    method: "GET",
    headers: new Headers({
      'Accept': 'application/json',
      "Content-Type": "application/json",
      'Authorization': `Bearer ${sessionStorage.jwt}`
    }),
     
  })
  return dispatch => {
    //debugger
    return fetch(request)
          .then(res => res.json())
          .then(users => dispatch(getUsers(users)))
          .catch(error => console.log(error))
  }
}

// // export const createUser = user => {
// //   return dispatch => {
// //     return fetch(`${API_URL}/users`, {
// //       method: "POST",
// //       headers: {
// //         'Content-Type': 'application/json'
// //       },
// //       body: JSON.stringify({ user: user })
// //     })
// //      .then(response => response.json())
// //      .then(user => dispatch(addUser(user)))
// //      .catch(error => console.log(error))
// //   }
// // }

// export const createUser = (user) => {
//   const newUser = user
//   return dispatch => {
//     return fetch(`${API_URL}/users`, {
//       method: "POST",
//       headers: {
//         "Accept":"application/json",
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify({user: user})
//     })
//       .then(response => response.json())
//       .then(jresp => {
//          dispatch(authenticate({
//           name: newUser.name,
//           email: newUser.email,
//           password: newUser.password})
//         );
//       })
//       .catch((errors) => {
//         dispatch(authFailure(errors))
//       })
//   };
// }

// export const authenticate = (credentials) => {
//   return dispatch => {
//     dispatch(authRequest())
//     return fetch(`${API_URL}/user_token`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({auth: credentials})
//     })
//       .then(res => res.json())
//       .then((response) => {
//           const token = response.jwt;
//           localStorage.setItem('token', token);
//           return getUser(credentials)
//       })
//       .then((user) => {
//         console.log(user)
//           dispatch(authSuccess(user, localStorage.token))
//       })
      
//       .catch((errors) => {
//           dispatch(authFailure(errors))
//           localStorage.clear()
//       })
//   }
  
// }

// export const getUser = (credentials) => {
  // const request = new Request(`${API_URL}/users`, {
  //   method: "POST",
  //   headers: new Headers({
  //     "Content-Type": "application/json",
  //     "Authorization": `Bearer ${localStorage.token}`,
  //   }),
  //   body: JSON.stringify({user: credentials})
  // })
//   return fetch(request)
//     .then(response => response.json())
//     .then(userJson => {return userJson})
//     .catch(error => {
//       return error;
//     });
// }

// .then(response => response.json())
//       .then(user => {
//         if (user.jwt) {
//         sessionStorage.setItem('jwt', user.jwt)
//         //debugger
//         dispatch({
//           type: 'SET_USER',
//           payload: user.current
//         })}
