import axios from "axios";


const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'pld-key': process.env.NEXT_PUBLIC_API_KEY
    }
});

export default apiClient;
