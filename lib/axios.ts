import Axios from "axios"

import { authApi } from "./api/authApi"

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // Enable sending cookies with requests
})

// axios.interceptors.response.use(
//   (response) => {
//     return response
//   },

//   async (error) => {
//     console.log("🚀 ~ error:", error)
//     const originalRequest = error.config

//     if (
//       error.response.status === 401 &&
//       !originalRequest._retry &&
//       originalRequest.url !== "/api/auth/refresh" &&
//       originalRequest.url !== "/api/auth/login"
//     ) {
//       originalRequest._retry = true
//       try {
//         await authApi.refreshToken()
//         return axios(originalRequest)
//       } catch (_error) {
//         return Promise.reject(_error)
//       }
//     }

//     return Promise.reject(error.response.data)
//   }
// )
