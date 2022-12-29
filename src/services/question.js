import axios from '~/utils/axiosCustomize'

export const getQuestionByQuiz = async (quizId, token) => {
  const res = await axios.get(`/questions-by-quiz`, {
    params: {
      quizId,
    },
    headers: { Authorization: `Bearer ${token}` },
  })
  return res
}
