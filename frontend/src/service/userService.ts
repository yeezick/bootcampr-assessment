import { User } from '../interfaces'

interface Fetcher {
  url: string
  method: string
  body?: User
}
const API_BASE_URL = 'http://localhost:8001'
const fethcher = async ({ url, method, body }: Fetcher) => {
  let response
  try {
    response = await fetch(url, {
      method,
      body: body && JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    throw new Error(`Network error: ${error.message}`)
  }
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  let data
  try {
    data = await response.json()
  } catch (error) {
    throw new Error(`API response error: ${error.message}`)
  }
  return data
}

export const postUser = (user: User) => {
  return fethcher({
    url: `${API_BASE_URL}/users`,
    method: 'POST',
    body: user,
  })
}
