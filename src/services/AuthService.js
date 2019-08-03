import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://bench-api.applover.pl/api/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    signIn(authData) {
        return apiClient.post('/api/v1/login', {...authData});
    }
}
