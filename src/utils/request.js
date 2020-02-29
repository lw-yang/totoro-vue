import axios from 'axios'
import store from '@/store'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,
});

// 给每个请求头部加上Token
service.interceptors.request.use(
    config => {
        if(store.getters.token) {
            config.headers['X-Totoro-Token'] = store.getters.token
            return config;
        }
    },
    err => {
        return Promise.reject(err)
    }
);

axios.interceptors.response.use(
    response => {
        console.log(response)
        return response;
    },
    err => {
        this.$toast(err)
        return Promise.reject(err)
    }
);

export default service

