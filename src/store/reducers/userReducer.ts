import { UserState, UserActionTypes, UserActions } from '../../common/types/user'

const initialState: UserState = {
    users: [],
    page: 0,
    error: null,
    loading: false
}

export const userReducer = (state = initialState, action: UserActions): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload.users,
                page: action.payload.page
            }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UserActionTypes.PREVIOUS_USER_PAGE:
            let prevPage = (state.page <= 1) ? 1 : (state.page - 1)
            return {
                ...state,
                page: prevPage
            }
        case UserActionTypes.NEXT_USER_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        default:
            return state
    }
}