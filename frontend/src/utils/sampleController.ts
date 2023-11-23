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

export const signUp = async (newUserData) => {
  try {
    const res = await api.post('sign-up', newUserData);
    return res.data
  } catch (error) {
    console.error(error)
    return false;
  }
}