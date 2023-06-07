
import { UserModel, UserUpdateRequest } from "../api/user";
import client from "./clientService";

export class UserService {

    static me = async () => {
        return client.get<UserModel>(`users/me`);
    }

    static update = async (request: UserUpdateRequest) => {
        return client.put<void, void, UserUpdateRequest>('users/me', request, { responseType: 'text' });
    }

}
