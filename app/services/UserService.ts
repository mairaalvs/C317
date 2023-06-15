
import { AxiosResponse } from "axios";
import { PictureUploadResponse, UserModel, UserUpdateRequest } from "../api/user";
import client from "./clientService";

export class UserService {

    static me = async () => {
        return client.get<UserModel>(`users/me`);
    }

    static update = async (request: UserUpdateRequest) => {
        return client.put<void, void, UserUpdateRequest>('users/me', request, { responseType: 'text' });
    }

    static uploadPicture = async (fileName: string | null | undefined, type: string | null | undefined, uri: string | null | undefined) => {
        const formData = new FormData();
        formData.append('avatar', {
            name: fileName ?? "avatar.png",
            type,
            uri,
        } as any);

        return client.post<PictureUploadResponse, AxiosResponse<PictureUploadResponse>, FormData>('uploads', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    }

    static getProfilePicture = async (uploadId: string) => {
        var picture = (await client.get(`uploads/${uploadId}`, { responseType: 'blob' })).data as Blob;
        if (picture == null) {
            return null;
        }
        return URL.createObjectURL(picture);
    }
}
