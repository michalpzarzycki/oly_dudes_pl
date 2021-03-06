const initialState = {
  loggedIn: false,
  registerSuccess: false,
  loadingSignUp: false,

}


const user = (state=initialState, action) => {
    console.log("ACTION")
    console.log(action.type, action.payload)
  switch (action.type) {
    case 'SIGN_IN_REQUEST':
      return {
          ...state,
        loggedIn: false
      }
      case 'SIGN_IN_SUCCESS':
        return {
            ...state,
          user:action.payload,
          loggedIn: true
        }
        case 'SIGN_IN_FAILURE':
      return {
          ...state,
        user:action.payload,
        loggedIn: false,
        registerSuccess: false
      }
      case 'SIGN_UP_REQUEST':
        return {
            ...state,
          loadingSignUp: true,
          registerSuccess: false
        }
        case 'SIGN_UP_SUCCESS':
          return {
              ...state,
            user:action.payload,
            loadingSignUp: false,
            registerSuccess: true
          }
          case 'SIGN_UP_FAILURE':
        return {
            ...state,
          user:action.payload,
          loadingSignUp: false
        }
        case 'SIGN_OUT_REQUEST':
          return {
              ...state,
          }
          case 'SIGN_OUT_SUCCESS':
            return {
                ...state,
              user:action.payload.user,
              loggedIn: false
            }
            case 'SIGN_OUT_FAILURE':
          return {
              ...state,
            loggedIn: true
          }
    default:
      return state
  }
}
export default user