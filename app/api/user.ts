import { ServiceSummary } from "./services";

export interface UserModel {
    id: string;
    cpf: string;
    name: string;
    email: string;
    phone: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    services: ServiceSummary[];
}

export interface UserUpdateRequest {
    name: string;
    address: string;
}