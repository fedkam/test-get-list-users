import axios, { AxiosResponse } from "axios";

export default class UserService {
    static async fetchUsers(page: number): Promise<AxiosResponse<any>> {
        return axios.post('/v2api/1/customer/index', {
            withCredentials: true,
            'page': page
        }
        ); //fix
    }
}
