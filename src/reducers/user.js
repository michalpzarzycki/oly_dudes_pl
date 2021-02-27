
const user = (state, action) => {
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