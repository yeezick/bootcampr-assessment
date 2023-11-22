import { AxiosResponse } from 'axios'
import { api } from './apiConfig'

export const signUp = async (formData: { firstName: string; lastName: string; email: string; password: string }) => {
  try {
    const response = await api.post('/sign-up', formData)
    return response.data
  } catch (error) {
    throw error.response || error
  }
}

export const checkEmail = async (email: string) => {
  let response: AxiosResponse<any, any>

  try {
    response = await api.get(`/check-email?email=${email}`)
    const data = response.data.exists
    return data
  } catch (error) {
    throw error.response || error
  }
}
