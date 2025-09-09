import { useAuthStore } from "@/store/auth"
import { useUserStore } from "@/store/user"
import axios from "axios"

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000'
 
export const Auth_Endpoint = `/api/v1/auth`

export const User_Endpoint =  `/api/v1/user`

export const Referral_Endpoint =  `/api/v1/referral`

export const Kyc_Endpoint =  `/api/v1/kyc`


export const ApiConfigs = {
    /// 
    
    /// login
    login_with_email:`${Auth_Endpoint}/login/email`,
    login_with_google: `${Auth_Endpoint}/login/google`,

    /// signup
    signup_with_email:`${Auth_Endpoint}/signup/email`,

    /// reset
    reset_password:`${Auth_Endpoint}/reset`,
    change_password: ``,

    /// verify
    verify_email:`${Auth_Endpoint}/verify/email`,
    verify_reset:`${Auth_Endpoint}/verify/reset`,

    /// User

    /// Profile
    profile_me: `${User_Endpoint}/profile/me`
}

 export const BaseAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
//   withCredentials: true,
})

/// Request interceptor to add auth token
BaseAxios.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/// Response interceptor to handle auth errors
BaseAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout()
       useUserStore.getState().clearUser()
    }
    return Promise.reject(error)
  }
)
