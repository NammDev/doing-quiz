import axios from '~/utils/axiosCustomize'

export const getQuizByAccess = async () => {
  const res = await axios.get(`/quiz-by-participant`)
  return res
}

export const getAllQuizForAdmin = async () => {
  const res = await axios.get(`/quiz/all`)
  return res
}

export const getQuizWithQA = async (quizId) => {
  const res = await axios.get(`/quiz-with-qa/${quizId}`)
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

export const putQuiz = async (id, description, name, difficulty, quizImage) => {
  const form = new FormData()
  form.append('id', id)
  form.append('description', description)
  form.append('name', name)
  form.append('difficulty', difficulty)
  form.append('quizImage', quizImage)
  const res = await axios.put(`/quiz`, form)
  return res
}

export const postAssignQuizForUser = async (quizId, userId) => {
  const res = await axios.post(`/quiz-assign-to-user`, { quizId, userId })
  return res
}

export const postUpsertQA = async (data) => {
  const res = await axios.post(`/quiz-upsert-qa`, { ...data })
  return res
}
