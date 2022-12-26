import axios from 'axios'

export const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export const getUser = async (page, limit) => {
  const res = await request.get(`/participant`, {
    params: {
      page,
      limit,
    },
  })
  return res.data
}

export const createUser = async (email, password, username, role, userImage) => {
  const form = new FormData()
  form.append('email', email)
  form.append('password', password)
  form.append('username', username)
  form.append('role', role)
  form.append('userImage', userImage)
  const res = await request.post(`/participant`, form)
  return res.data
}
