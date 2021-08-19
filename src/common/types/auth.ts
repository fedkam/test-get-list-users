export enum AuthActionTypes {
    FETCH_TOKEN = 'FETCH_TOKEN',
    FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS',
    FETCH_TOKEN_ERROR = 'FETCH_TOKEN_ERROR'
}

export interface AuthState {
    isAuth: boolean;
    loading: boolean;
}

interface FetchTokenAction {
    type: AuthActionTypes.FETCH_TOKEN,
}

interface FetchTokenSuccessAction {
    type: AuthActionTypes.FETCH_TOKEN_SUCCESS,
}

interface FetchUserErrorAction {
    type: AuthActionTypes.FETCH_TOKEN_ERROR;
    payload: string;
}

export type AuthActions = FetchTokenAction | FetchTokenSuccessAction | FetchUserErrorAction;