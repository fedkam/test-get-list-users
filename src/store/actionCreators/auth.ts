import { AuthActions, AuthActionTypes } from '../../common/types/auth'
import { Dispatch } from 'redux'
import axios from 'axios'
import AuthService from '../../service/AuthService'

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthActions>) => {
        try {
            dispatch({ type: AuthActionTypes.FETCH_TOKEN })

            const response = await AuthService.login(email, password)

            //document.cookie = `X-ALFACRM-TOKEN=${response?.data?.token}; path=/; secure = true; SameSite = strict; ` //fix httpOnly; Почему-то 401 код... 
            axios.interceptors.request.use(function (config) {
                config.headers = { 'X-ALFACRM-TOKEN': response?.data?.token }
                return config;
            }, function (error) { return Promise.reject(error); });

            dispatch({ type: AuthActionTypes.FETCH_TOKEN_SUCCESS })
            console.log('login success', response)
        } catch (err) {
            console.log(err)
            dispatch({
                type: AuthActionTypes.FETCH_TOKEN_ERROR,
                payload: 'Произошла ошибка при входе, проверьте корректность логина и пароля'
            })
        }
    }
}