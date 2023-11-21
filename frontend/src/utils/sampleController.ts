import { api } from './apiConfig'

export const sayHello = async () => {
  try {
    const res = await api.get('hello-world')
    return res.data
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      return false
    }
  }
}
