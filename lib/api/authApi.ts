import { axios } from "../axios"
import { LoginType, RegiterType } from "../validators/auth"

export const authApi = {
  signup: async (userDetails: RegiterType) => {
    const response = await axios.post("api/auth/register", userDetails)
    return response.data
  },

  signin: async (userDetails: LoginType) => {
    const response = await axios.post("api/auth/login", userDetails)
    return response.data

    // const response = await fetch("api/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userDetails),
    // })

    // const result = await response.json()
    // console.log("🚀 ~ signin: ~ result:", result)

    // return result
  },

  //   googleAuth: async () => {
  //     const response = await axios.post("api/auth/google")
  //     return response.data
  //   },

  //   logout: async () => {
  //     const response = await axios.post("api/auth/logout")
  //     return response.data
  //   },

  getProfile: async () => {
    const response = await axios.get("/profile")
    return response.data
  },

  refreshToken: async () => {
    const response = await axios.post("api/auth/refresh")
    return response.data
  },
}
