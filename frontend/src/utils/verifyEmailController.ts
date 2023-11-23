import { api } from './apiConfig'

export const verifyEmail = async (email: string) => {
  try {
    const verified = await api.post('verify-email', { email })
    return verified.status === 200 ? true : false
  } catch (error) {
    console.error(error)
    return false
  }
}
