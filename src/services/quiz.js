import axios from '~/utils/axiosCustomize'

export const getQuizByAccess = async (token) => {
  const res = await axios.get(`/quiz-by-participant`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return res
}
