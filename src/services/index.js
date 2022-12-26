import axios from '~/utils/axiosCustomize'

export const getAmountUsers = async (page, limit) => {
  const res = await axios.get(`/participant`, {
    params: {
      page,
      limit,
    },
  })
  return res
}

export const getAllUsers = async () => {
  const res = await axios.get(`/participant/all`)
  return res
}

export const createUser = async (email, password, username, role, userImage) => {
  const form = new FormData()
  form.append('email', email)
  form.append('password', password)
  form.append('username', username)
  form.append('role', role)
  form.append('userImage', userImage)
  const res = await axios.post(`/participant`, form)
  return res
}
