import { createContext, useContext, useEffect, useState } from "react";
import { AuthService } from "../services/auth";
import * as SecureStore from 'expo-secure-store';
import client from "../services/clientService";
import { LoginRequest, LoginResponse, RegistrationRequest, RegisterResponse } from "../api/auth";

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null };
    onRegister?: (request: RegistrationRequest) => Promise<RegisterResponse>;
    onLogin?: (request: LoginRequest) => Promise<LoginResponse>;
    onLogout?: () => Promise<void>;
}

const TOKEN_KEY = "token";
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<{ token: string | null; authenticated: boolean | null }>({
        token: null,
        authenticated: null,
    });

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY);
            if (token) {
                setAuthState({
                    token,
                    authenticated: true,
                })
            }
        }
        loadToken();
    }, [])

    const register = async (request: RegistrationRequest): Promise<RegisterResponse> => {
        return await AuthService.register(request);
    };

    const login = async (request: LoginRequest): Promise<LoginResponse> => {
        const result = await AuthService.login(request);
        setAuthState({
            token: result.data.token,
            authenticated: true,
        });

        await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

        return result;
    };

    const logout = async () => {
        try {
            // Delete token from secure storage
            await SecureStore.deleteItemAsync(TOKEN_KEY);

            setAuthState({
                token: null,
                authenticated: false,
            });
        } catch (e) {
            alert(e);
        }
    };

    const value: AuthProps = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}