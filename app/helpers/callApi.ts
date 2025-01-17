import axios from "axios";

const callApi = () => {
    const axiosInstance = axios.create({
        baseURL: 'http://195.177.255.157/api/v1'
    })

    axiosInstance.interceptors.request.use(
        (config) => {
            return config;
        },
        err => Promise.reject(err)
    )

    axiosInstance.interceptors.response.use(
        res => {
            // manage validation
            return res;
        },
        err => Promise.reject(err)
    )

    return axiosInstance;
}

export default callApi;