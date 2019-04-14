

 const initialState = {
  current: {name: '', email: '', article: []}
  
 }

export default function usersReducer ( state = initialState, action){
 
  switch (action.type) {

  case "SET_USER":
   //debugger
   return {...state, current: action.payload}

  case "GET_USER":
   //debugger
   return {...state, current: action.payload}
  
default:
        return state

}
}