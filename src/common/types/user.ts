import { Moment } from "moment";

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    PREVIOUS_USER_PAGE = 'PREVIOUS_USER_PAGE',
    NEXT_USER_PAGE = 'NEXT_USER_PAGE'
}

export interface User {
    name: string;
    dob: Moment;
    balance: number;
    e_date: Moment;
    email: string | string[];
    phone: string | string[];
    addr: string | string[];
    custom_photo: any;
}

export interface UserState {
    users: [] | User[];
    loading: boolean;
    error: null | string;
    page: number;
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
}
interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: {
        page: number;
        users: [] | User[]
    };
}
interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
interface PreviousUserPage {
    type: UserActionTypes.PREVIOUS_USER_PAGE;
    payload: number;
}
interface NextUserPage {
    type: UserActionTypes.NEXT_USER_PAGE;
    payload: number;
}

export type UserActions = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | PreviousUserPage | NextUserPage;