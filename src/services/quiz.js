import axios from '~/utils/axiosCustomize'

export const getQuizByAccess = async () => {
  const res = await axios.get(`/quiz-by-participant`)
  return res
}

export const getAllQuizForAdmin = async () => {
  const res = await axios.get(`/quiz/all`)
  return res
}

export const postQuiz = async (description, name, difficulty, quizImage) => {
  const form = new FormData()
  form.append('description', description)
  form.append('name', name)
  form.append('difficulty', difficulty)
  form.append('quizImage', quizImage)
  const res = await axios.post(`/quiz`, form)
  return res
}
