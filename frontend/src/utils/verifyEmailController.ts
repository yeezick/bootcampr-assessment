import { api } from './apiConfig'

export const verifyEmail = async (email: string) => {
  try {
    await api.post('verify-email', { email })
    return true
  } catch (error) {
    console.error(error)
  }
}
