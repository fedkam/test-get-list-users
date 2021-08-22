/* eslint-disable no-unused-vars */

export enum AuthActionTypes {
    FETCH_TOKEN = 'FETCH_TOKEN',
    FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS',
    FETCH_TOKEN_ERROR = 'FETCH_TOKEN_ERROR',
    LOGOUT = 'LOGOUT'
}

export interface AuthState {
    isAuth: boolean;
    loading: boolean;
    error: string
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

interface LogoutAction {
    type: AuthActionTypes.LOGOUT;
}

export type AuthActions = FetchTokenAction | FetchTokenSuccessAction | FetchUserErrorAction | LogoutAction;
