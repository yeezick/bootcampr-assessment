import { api } from './apiConfig'

export const verifyEmail = async () => {
  try {
    const res = await api.get('verifyEmail')
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}