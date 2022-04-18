import PersonalData from "./PersonalData";

interface LoginResponse {
    status: number,
    message: string,
    userData: PersonalData
}

export default LoginResponse;
