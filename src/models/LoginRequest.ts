import LoginCredentials from "./LoginCredentials";

interface LoginRequest {
    data: LoginCredentials,
    typeRequest: string
}

export default LoginRequest;
