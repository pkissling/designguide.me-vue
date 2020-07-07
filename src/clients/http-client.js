import axios from 'axios'
import { baseUrl } from "../config";

export const httpClient = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {'Content-Type': 'application/json',}
});



