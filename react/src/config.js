import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://moonnadablog.herokuapp.com/api/"
})