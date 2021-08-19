import { AuthState, AuthActionTypes, AuthActions } from '../../common/types/auth'

const initialState: AuthState = {
    isAuth: false,
    loading: false
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
                isAuth: true
            }
        default:
            return state
    }
}