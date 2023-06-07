import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const client = axios.create({
    baseURL: 'https://hourglass-api.azurewebsites.net/api/v1/',
    // baseURL: 'https://0da8-179-106-188-179.ngrok-free.app/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

client.interceptors.request.use(
    // handle a request
    async config => {
        // get the token from the local storage
        const token = await SecureStore.getItemAsync('token');

        // if the token exists, set it in the config headers
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }

        // return the config
        return config;
    },
    // handle an error
    error => {
        // return a rejected promise
        return Promise.reject(error);
    }
);

// export axios as a service
export default client;