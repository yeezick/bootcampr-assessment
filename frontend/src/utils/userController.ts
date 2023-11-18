import { api } from './apiConfig'

type UserData = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export const createUser = async (userData: UserData) => {
  try {
    const newUser = await api.post('user', userData)
    console.log(newUser)
    return newUser.data
  } catch (error) {
    console.error(error)
    return { success: false, error: error.message || 'An error occurred' }
  }
}
