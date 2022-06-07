export interface AuthToken {
    userId: number;
    userName: string;
    token: string;
}

export interface AuthState {
    userId?: number;
    userName?: string;
    token?: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}

