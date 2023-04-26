import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://178.20.44.175:8005/api/v1/",
    withCredentials: false,
    credentials: true,
    headers: {
        common: {
            Accept: 'application/json',
        }
    }
});


export class BaseController {
    instance = axiosInstance
}