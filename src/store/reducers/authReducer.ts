import { AuthState, AuthActionTypes, AuthActions } from '../../common/types/auth'

const initialState: AuthState = {
    isAuth: false,
    loading: false,
    error: ''
}

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case AuthActionTypes.FETCH_TOKEN:
            return {
                ...state,
                loading: true
            }
        case AuthActionTypes.FETCH_TOKEN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: true,
                error: ''
            }
        case AuthActionTypes.FETCH_TOKEN_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case AuthActionTypes.LOGOUT:
            return {
                ...state,
                isAuth: false,
                loading: false,
                error: ''
            }
        default:
            return state
    }
}