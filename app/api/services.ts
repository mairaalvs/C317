export interface ServiceSummary {
    id: string;
    name: string;
    description: string;
    price: number;
    serviceCategory: string;
    userName: string;
    createdAt: string;
    updatedAt: string;
    contactLink: string;
}

export interface ServiceCreateRequest {
    name: string;
    description: string;
    userId: string;
    serviceCategoryId?: string;
    price: number;
    contactLink: string;
}

export interface ServiceUpdateRequest {
    name: string;
    price: number | null;
    contactLink: string;
}