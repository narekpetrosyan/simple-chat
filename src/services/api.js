import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api'
const headers = {
    'Content-Type': 'application/json',
}

export const userApi = {
    login(data) {
        return axios.post(`${baseURL}/v1/user/auth/login`, data,{headers}).then(({data}) => data);
    },
};
