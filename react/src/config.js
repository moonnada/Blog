import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://blogooo.herokuapp.com/api/"
})