import axios, { AxiosResponse } from 'axios'
import { AuthResponse } from './types'

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return axios.post('/v2api/auth/login', {
            'email': email,
            'api_key': password
        })
    }

    static async checkLogin() { }

    static async registration(email: string, password: string): Promise<any> { }

    static async logout(email: string, password: string): Promise<void> { }
}
