import { redirect } from "next/navigation"
import Axios from "axios"

import { authApi } from "./api/authApi"

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // Enable sending cookies with requests
})
