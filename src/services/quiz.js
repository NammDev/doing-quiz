import axios from '~/utils/axiosCustomize'

export const getQuizByAccess = async () => {
  const res = await axios.get(`/quiz-by-participant`)
  return res
}
