import Axios from "axios"

export const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true, // Enable sending cookies with requests
})
