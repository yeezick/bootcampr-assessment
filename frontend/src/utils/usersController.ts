import { api } from './apiConfig'

export const signUp = async (userData) => {
  try {
    const res = await api.post('sign-up', userData);
    return res.data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export const sayHello = async () => {
  try {
    const res = await api.get('hello-world')
    return res.data;
  } catch (error) {
    console.error(error)
    return false
  }
}

