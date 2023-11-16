import { api } from './apiConfig'

export const sayHello = async () => {
  try {
    const res = await api.get('hello-world')
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}
export const checkEmail = async (email:string) => {
  try {
    const res = await api.post('api/users/check-email', {email})
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}
