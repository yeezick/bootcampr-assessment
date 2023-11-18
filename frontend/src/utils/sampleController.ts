import { api } from './apiConfig'

const addUser = async (details) => {
  try {
    const res = await api.post('/add-user', details);
    console.log('response to addUser', res);
    return res.data
  } catch (err) {
    console.error(err)
    return false
  }
}

const validateEmail = async (email) => {
  try {
    const res = await api.get(`/validate-email/${email}`);
    return res.data;
  } catch (err) {
    console.error(err)
    return false
  }
}

export {addUser, validateEmail}