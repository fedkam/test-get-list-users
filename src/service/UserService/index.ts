import { AxiosResponse } from 'axios'
import { $axios, getDefaultHeaderToken } from '../../http'

export default class UserService {
    static async fetchUsers (page: number): Promise<AxiosResponse<any>> {
        return $axios.post('/v2api/1/customer/index', {
            page: page
        }, {
            headers: getDefaultHeaderToken()
        })
    }

    static async createUser (name: string, date: string, email: string, phone: string, address: string) {
        return $axios.post('/v2api/1/customer/create', {
            name: name,
            date: date,
            email: email,
            phone: phone,
            address: address,
            branch_ids: [1],
            legal_type: 1,
            is_study: 0
        }, {
            headers: getDefaultHeaderToken()
        })
    }
}
