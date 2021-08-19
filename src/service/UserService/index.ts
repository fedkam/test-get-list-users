import axios, { AxiosResponse } from "axios";

export default class UserService {
    static async fetchUsers(token: string, page: number): Promise<AxiosResponse<any>> {
        return axios.get('/v2api/customer/index', {
            headers: { 'X-ALFACRM-TOKEN': token },
            params: { page: page }
        }); //fix
    }
}
