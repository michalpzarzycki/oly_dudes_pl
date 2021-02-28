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