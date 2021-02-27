const user = (state={}, action) => {
    console.log("ACTION")
    console.log(action.type, action.payload)
  switch (action.type) {
    case 'SIGN_IN':
      return {
          ...state,
        user:action.payload,
        loggedIn: true
      }
    case 'SIGN_OUT':
        return state
      
    default:
      return state
  }
}
export default user