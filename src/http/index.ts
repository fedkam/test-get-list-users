import axios from 'axios'

const TOKEN_NAME = 'X-ALFACRM-TOKEN' as const

export const $axios = axios.create({
    withCredentials: true
})

export const setDefaultHeaderToken = (token: string): void => {
    $axios.defaults.headers.common[TOKEN_NAME] = token
}

export const getDefaultHeaderToken = (): object => {
    return { [TOKEN_NAME]: $axios.defaults.headers.common[TOKEN_NAME] }
}
