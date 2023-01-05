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

export const postLogout = async (email, refresh_token) => {
  const res = await axios.post(`/logout`, {
    email,
    refresh_token,
  })
  return res
}

export const postRefreshToken = async (email, refresh_token) => {
  const res = await axios.post(`/refresh-token`, {
    email,
    refresh_token,
  })
  return res
}

export const getOverview = async () => {
  const res = await axios.get(`/overview`)
  return res
}
