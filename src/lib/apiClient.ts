import axios, {type AxiosInstance, isAxiosError} from "axios";


export const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Pld-Key': process.env.NEXT_PUBLIC_API_KEY
    }
});


export function apiError(error: Error) {
    if(isAxiosError(error)) {
        error.message = error.response?.data?.message;
    }

    return error;
}
