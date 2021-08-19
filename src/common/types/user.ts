import { Moment } from "moment";

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    PREVIOUS_USER_PAGE = 'PREVIOUS_USER_PAGE',
    NEXT_USER_PAGE = 'NEXT_USER_PAGE',
    CREATE_USER = 'CREATE_USER',
    CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
}

export interface User {
    id: number;
    name: string;
    dob: Moment;
    balance: string;
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
}
interface NextUserPage {
    type: UserActionTypes.NEXT_USER_PAGE;
}
interface CreateUserAction {
    type: UserActionTypes.CREATE_USER
}
interface CreateUserSuccessAction {
    type: UserActionTypes.CREATE_USER_SUCCESS
}

export type UserActions = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | PreviousUserPage | NextUserPage | CreateUserAction | CreateUserSuccessAction;

