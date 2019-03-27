import { createUser } from '../Actions/userActions';
//import { browserHistory }  from 'react-router';

 const initialState = {
  current: {},
  
 }

export default function usersReducer ( state = initialState, action){
 
  switch (action.type) {

  case "SET_USER":
   //debugger
   return {...state, current: action.payload}
  
default:
        return state

}
}