import { AuthActions, AuthActionTypes } from '../../common/types/auth'
import { Dispatch } from 'redux'
import AuthService from '../../service/AuthService'
import { setDefaultHeaderToken } from '../../http'

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthActions>) => {
        try {
            dispatch({ type: AuthActionTypes.FETCH_TOKEN })
            const response = await AuthService.login(email, password)
            // document.cookie = `X-ALFACRM-TOKEN=${response?.data?.token}; path=/; secure = true; SameSite = strict; ` //fix httpOnly; Почему-то 401 код...
            setDefaultHeaderToken(response?.data?.token)
            dispatch({ type: AuthActionTypes.FETCH_TOKEN_SUCCESS })
        } catch (err) {
            console.log(err)
            dispatch({
                type: AuthActionTypes.FETCH_TOKEN_ERROR,
                payload: 'Произошла ошибка при входе, проверьте корректность логина и пароля'
            })
        }
    }
}
