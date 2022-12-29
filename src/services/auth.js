import axios from '~/utils/axiosCustomize'

export const postLogin = async (email, password) => {
  const res = await axios.post(`/login`, {
    email,
    password,
  })
  return res
}

export const postRegister = async (email, username, password) => {
  const res = await axios.post(`/register`, {
    email,
    username,
    password,
  })
  return res
}
