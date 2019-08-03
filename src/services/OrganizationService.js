import axios from 'axios';
import store from '@/store';

const apiClient = axios.create({
    baseURL: 'https://bench-api.applover.pl/api/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getDetails() {
        return apiClient.get('/v1/organization', { headers: { Authorization: store.state['auth'].authToken } });
    }
}
