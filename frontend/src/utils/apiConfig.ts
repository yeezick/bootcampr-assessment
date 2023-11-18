import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8001/',
})

api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const { status, data } = error.response || {}
    return Promise.reject({
      status,
      message: data?.error || 'An error occurred',
    })
  }
)
