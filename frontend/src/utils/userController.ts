import { api } from './apiConfig'

const getUser = async (email: String) => {
  try {
    const res = await api.get(`api/user?email=${email.toLowerCase()}`)
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}

const getUsers = async () => {
  try {
    const res = await api.get(`api/user`)
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}

const addUser = async (
  firstname: string,
  lastname: string,
  email: String,
  password: string
) => {
  try {
    const res = await api.post('api/user', {
      firstname,
      lastname,
      email,
      password,
    })
    return res
  } catch (error) {
    console.error(error)
    return false
  }
}

export { getUser, getUsers, addUser }
