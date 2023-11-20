import { api } from './apiConfig'

export const verifyEmail = async (email: string) => {
  try {
    const res = await api.post('verifyEmail',{email})
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}