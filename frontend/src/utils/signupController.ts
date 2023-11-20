import { api } from './apiConfig'

export const postData = async (formData: object) => {
  try {
    const res = await api.post('signup', formData)
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}