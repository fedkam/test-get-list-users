import { AuthActions, AuthActionTypes } from '../../common/types/auth'
import { Dispatch } from 'redux'
import axios from 'axios'
import AuthService from '../../service/AuthService'

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthActions>) => {
        try {
            dispatch({ type: AuthActionTypes.FETCH_TOKEN })
            const response = await AuthService.login(email, password)
            response?.data?.token && (
                document.cookie = `X-ALFACRM-TOKEN=${response?.data?.token}; path=/; secure = true; SameSite = strict` //fix httpOnly; 
            )
        } catch (err) {
            console.log(err)
            dispatch({
                type: AuthActionTypes.FETCH_TOKEN_ERROR,
                payload: 'Произошла ошибка при входе, проверьте корректность логина и пароля'
            })
        }
    }
}