import { ForgotPasswordRequest, LoginRequest, LoginResponse, RegistrationRequest, RegisterResponse } from "../api/auth";
import client from "./clientService";

export class AuthService {

    static login = (request: LoginRequest) => {
        return client.post<LoginRequest, LoginResponse>('auth/login', request);
    }

    static register = (request: RegistrationRequest) => {
        return client.post<RegistrationRequest, RegisterResponse>('auth/registration', request, { responseType: 'text' });
    }

    static forgotPassword = (request: ForgotPasswordRequest) => {
        return client.post<ForgotPasswordRequest, void>('auth/forgot-password', request, { responseType: 'text' });
    }

}
