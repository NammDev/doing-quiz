import axios from '~/utils/axiosCustomize'

export const getQuestionByQuiz = async (quizId) => {
  const res = await axios.get(`/questions-by-quiz`, {
    params: {
      quizId,
    },
  })
  return res
}

export const postCreateQuestionForQuiz = async (quizId, description, questionImage) => {
  const form = new FormData()
  form.append('quiz_id', quizId)
  form.append('description', description)
  form.append('questionImage', questionImage)
  const res = await axios.post(`/question`, form)
  return res
}

export const postCreateAnswerforQuestion = async (question_id, description, correct_answer) => {
  const res = await axios.post(`/answer`, {
    description,
    correct_answer,
    question_id,
  })
  return res
}
