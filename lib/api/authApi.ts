import { axios } from "../axios"
import { LoginType, RegiterType, verifyRequestType } from "../validators/auth"

export const authApi = {
    signup: async (userDetails: RegiterType) => {
        const response = await axios.post("api/auth/register", userDetails)
        return response.data
    },

    signin: async (userDetails: LoginType) => {
        const response = await axios.post("api/auth/login", userDetails)
        return response.data
    },

    reSendEmail: async (email: string) => {
        const response = await axios.post("api/auth/verify", email)
        return response.data
    },

    verify: async (data: verifyRequestType) => {
        const response = await axios.put("api/auth/verify", data)
        return response.data
    },

    logout: async () => {
        const response = await axios.post("api/auth/logout")
        return response.data
    },

    getProfile: async () => {
        const response = await axios.get("api/auth/profile")
        return response.data
    },

    refreshToken: async () => {
        const response = await axios.post("api/auth/refresh")
        return response.data
    },

    password_token: async (email: string) => {
        const response = await axios.post("api/auth/reset_password", { email })
        return response.data
    },
    change_password: async (email: string, token: string, password: string) => {
        const response = await axios.put("api/auth/reset_password", { email, token, password })
        return response.data
    },
}
