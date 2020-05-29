import axios from 'axios'
import { baseUrl } from "../config";

export const httpClient = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    headers: {'Content-Type': 'application/json',}
});



