import { createUser } from '../Actions/userActions';
//import { browserHistory }  from 'react-router';

 const initialState = {
  current: {},
  //session: !!sessionStorage.jwt
 }
//  // const initialState = {
//  //  isAuthenticated: false,
//  //  isAuthenticating: false,
//  //  currentUser: {},
//  //  token: null,
//  //  errors: []
// }
export default function usersReducer ( state = initialState, action){
 
  switch (action.type) {

  case "SET_USER":
  //browserHistory.push('/')
  //return !!sessionStorage.jwt
   return {...state, current: action.payload}
  
  // case "AUTHENTICATION_REQUEST":
  //     return {
  //       ...state,
  //       isAuthenticating: true
  //     }

  //   case "AUTHENTICATION_SUCCESS":
  //     return {
  //       ...state,
  //       isAuthenticated: true,
  //       isAuthenticating: false,
  //       currentUser: action.user,
  //       token: action.token
  //     }

  //     case "AUTHENTICATION_FAILURE":
  //     return {
  //       isAuthenticated: false,
  //       isAuthenticating: false,
  //       currentUser: {},
  //       token: null,
  //       errors: action.errors || []
  //     }
  // case "CREATE_USER":
  // return {...state, users: [...state.users, action.user]}
  
  // case "GET_USERS":
  //  return {...state, users: action.users}
   
default:
        return state

}
}