export interface LoginResponse {
    data: {
        isAuthSuccessful: boolean;
        errorMessage: string;
        token: string;
    }
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterResponse {
    id: string;
    name: string;
    email: string;
    cpf: string;
    role: string;
}

export interface RegistrationRequest {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    cpf: string;
}

export interface ForgotPasswordRequest {
    email: string;
    clientURI: string;
}