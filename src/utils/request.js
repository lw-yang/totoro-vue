import axios from 'axios'
import store from '@/store'
import {Notify } from 'vant';

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,
});

// 给每个请求头部加上Token
service.interceptors.request.use(
    config => {
        if(typeof store.getters.token === "string") {
            config.headers['X-Totoro-Token'] = store.getters.token
        }
        return config;
    },
    err => {
        Notify("网络开小差了~");
        return Promise.reject(err)
    }
);

service.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        let err_data = err.response.data
        if (err_data.err_code == null){
            Notify("服务器开小差啦, 请联系作者~");
        }else {
            Notify(err_data.err_code + "  " + err_data.err_message);
        }
        return Promise.reject(err)
    }
);

export default service

