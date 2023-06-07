import { LoginResponse } from "../api/auth";
import { ServiceCreateRequest, ServiceSummary, ServiceUpdateRequest } from "../api/services";
import client from "./clientService";

export class ServiceService {

    static list = async () => {
        return client.get<ServiceSummary[]>('services');
    }

    static get = async (id: string) => {
        return client.get<ServiceSummary>(`services/${id}`)
    }

    static create = async (request: ServiceCreateRequest) => {
        return client.post<void, void, ServiceCreateRequest>('services', request);
    }

    static update = async (id: string, request: ServiceUpdateRequest) => {
        return client.put<void, void, ServiceUpdateRequest>(`services/${id}`, request, { responseType: 'text' });
    }

    static delete = async (id: string) => {
        return client.delete<void>(`services/${id}`, { responseType: 'text' });
    }

}
