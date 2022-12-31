import axios from '~/utils/axiosCustomize'

export const postSubmitAnswer = async (payload) => {
  const res = await axios.post(`/quiz-submit`, payload)
  return res
}
