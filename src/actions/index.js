export const signInRequest = () => ({
    type: 'SIGN_IN_REQUEST',
    payload: {
        loading: true
    },
  })

export const signInSuccess = (user) => ({
    type: 'SIGN_IN_SUCCESS',
    payload: {
        data: user,
        loading: false,
    }
})

export const singInFailure = (error) => ({
    type: 'SIGN_IN_FAILURE',
    payload: {
        error
    }
})
export const signUpRequest = () => ({
    type: 'SIGN_UP_REQUEST',
    payload: {
        loadingSignUp: true
    },
  })

export const signUpSuccess = (user) => ({
    type: 'SIGN_UP_SUCCESS',
    payload: {
        data: user,
        loadingSignUp: false,
    }
})

export const singUpFailure = (error) => ({
    type: 'SIGN_UP_FAILURE',
    payload: {
        error
    }
})
export const signOutRequest = () => ({
    type: 'SIGN_OUT_REQUEST',

  })

export const signOutSuccess = () => ({
    type: 'SIGN_OUT_SUCCESS',
    payload: {
        user:{}
    },
    
})

export const singOutFailure = () => ({
    type: 'SIGN_OUT_FAILURE',
    payload: true
})