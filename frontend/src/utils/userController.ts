import { api } from './apiConfig'

export const getUser = async (email: String) => {
  try {
    const res = await api.get(`user?email=${email.toLowerCase()}`)

    console.log(res.data)
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}
