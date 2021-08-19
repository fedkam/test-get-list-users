import { AxiosResponse } from "axios";
import { $axios } from "../../http";

export default class UserService {
    static async fetchUsers(page: number, token: object): Promise<AxiosResponse<any>> {
        return $axios.post('/v2api/1/customer/index', {
            'page': page
        }, {
            headers: { token }
        });
    }
}
