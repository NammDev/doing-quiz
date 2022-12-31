import axios from '~/utils/axiosCustomize'

export const getQuestionByQuiz = async (quizId) => {
  const res = await axios.get(`/questions-by-quiz`, {
    params: {
      quizId,
    },
  })
  return res
}
