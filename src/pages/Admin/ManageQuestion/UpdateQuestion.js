import classNames from 'classnames/bind'
import styles from './UpdateQuestion.module.scss'
import Select from 'react-select'
import { useState, useEffect } from 'react'
import QuestionAnswer from './QuestionAnswer'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import ButtonComponent from '~/components/Button/Button'
import { RiAddFill } from 'react-icons/ri'
import { getAllQuizForAdmin, getQuizWithQA, postUpsertQA } from '~/services/quiz'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)
const NEW_QUESTION = {
  id: uuidv4(),
  description: '',
  imageFile: '',
  imageName: '',
  answers: [{ id: uuidv4(), description: '', isCorrect: false }],
}

function UpdateQuestion() {
  const [selectedQuiz, setSelectedQuiz] = useState()
  const [questions, setQuestions] = useState([])
  const [listQuiz, setListQuiz] = useState([])

  const fetchQuizApi = async () => {
    const data = await getAllQuizForAdmin()
    if (data && data.EC === 0) {
      const newListQuiz = data.DT.map((q) => ({ value: q.id, label: `${q.id} - ${q.description}` }))
      setListQuiz(newListQuiz)
    }
  }

  const toBase64 = (file) => {
    if (typeof file === 'string') {
      return `data:image/jpeg;base64,${file}`
    } else {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    }
  }
  const fetchQuestionAnswerApi = async (quizId) => {
    const data = await getQuizWithQA(quizId)
    if (data && data.EC === 0) {
      setQuestions(data.DT.qa)
    }
  }

  useEffect(() => {
    if (selectedQuiz) {
      fetchQuestionAnswerApi(selectedQuiz.value)
    }
  }, [selectedQuiz])

  const postApi = async () => {
    // Upsert API
    let questionsClone = _.cloneDeep(questions)
    for (let i = 0; i < questionsClone.length; i++) {
      const q = questionsClone[i]
      if (q.imageFile) {
        q.imageFile = await toBase64(q.imageFile)
      }
    }
    let res = await postUpsertQA({
      quizId: selectedQuiz.value,
      questions: questionsClone,
    })
    if (res && res.EC === 0) {
      // Reset Data
      toast.success(res.EM)
      setQuestions([])
      setSelectedQuiz('')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      toast.error(res.EM)
    }
  }

  useEffect(() => {
    fetchQuizApi()
  }, [])

  const handleQuestion = (type, id) => {
    switch (type) {
      case 'ADD':
        const newQuestion = { ...NEW_QUESTION, id: uuidv4() }
        setQuestions((state) => [...state, newQuestion])
        break
      case 'REMOVE':
        if (questions.length > 1) {
          setQuestions((state) => state.filter((item) => item.id !== id))
        }
        break
      case 'COPY':
        console.log(id)
        break
      default:
        break
    }
  }

  const handleAnswer = (type, questionId, answerId) => {
    if (type === 'ADD') {
      let questionClone = _.cloneDeep(questions)
      const newAnswer = { id: uuidv4(), description: '', isCorrect: false }
      const index = questionClone.findIndex((item) => item.id === questionId)
      questionClone[index].answers.push(newAnswer)
      setQuestions(questionClone)
    } else if (type === 'REMOVE') {
      let questionClone = _.cloneDeep(questions)
      const index = questionClone.findIndex((item) => item.id === questionId)
      if (questionClone[index].answers.length > 1) {
        questionClone[index].answers = questionClone[index].answers.filter(
          (item) => item.id !== answerId
        )
        setQuestions(questionClone)
      }
    }
  }

  const handleOnChange = (type, questionId, payload, answerId) => {
    let questionsClone = _.cloneDeep(questions)
    let index = questionsClone.findIndex((item) => item.id === questionId)
    if (index < 0) {
      return
    }
    switch (type) {
      case 'TEXT':
        questionsClone[index].description = payload
        setQuestions(questionsClone)
        break
      case 'FILE':
        questionsClone[index].imageFile = payload
        questionsClone[index].imageName = payload?.name
        setQuestions(questionsClone)
        break
      case 'ANSWER':
        questionsClone[index].answers = questionsClone[index].answers.map((a) => {
          if (a.id === answerId) {
            if (payload.type === 'CHECKBOX') {
              a.isCorrect = payload.value
            } else if (payload.type === 'TEXT') {
              a.description = payload.value
            }
          }
          return a
        })
        setQuestions(questionsClone)
      default:
        break
    }
  }

  const validate = () => {
    let isValidQuiz = true,
      isValidQuestion = true,
      isValidAnswer = true,
      isValidCheckbox = true
    let indexQ = 0,
      indexA = 0
    // Validate Quiz
    if (_.isEmpty(selectedQuiz)) {
      isValidQuiz = false
      toast.error('Please Choose a Quiz!')
      return
    }
    // Validate Question
    for (let i = 0; i < questions.length; i++) {
      if (!questions[i].description) {
        isValidQuestion = false
        indexQ = i
        break
      }
    }
    if (!isValidQuestion) {
      toast.error(`Please input description for Question ${++indexQ}`)
      return
    }
    // Validate Answer
    for (let i = 0; i < questions.length; i++) {
      for (let k = 0; k < questions[i].answers.length; k++) {
        if (!questions[i].answers[k].description) {
          isValidAnswer = false
          indexA = k
          indexQ = i
          break
        }
      }
      if (!isValidAnswer) break
    }
    if (!isValidAnswer) {
      toast.error(`Please input description for Answer ${++indexA} at Question ${++indexQ}`)
      return
    }
    // Validate Checkbox
    for (const [i, q] of questions.entries()) {
      const count = q.answers.reduce((acc, a) => {
        if (a.isCorrect === true) {
          acc = acc + 1
        }
        return acc
      }, 0)
      if (count === 0) {
        indexQ = i
        isValidCheckbox = false
        break
      }
    }
    if (!isValidCheckbox) {
      toast.error(`Please choose at least 1 correct answer at Question ${++indexQ}`)
      return
    }
    // validate
    return isValidQuiz && isValidQuestion && isValidAnswer && isValidCheckbox
  }

  const handleSubmit = async () => {
    // Submit Question & Answer -> Call API
    validate() && postApi()
  }

  return (
    <div className={cx('container')}>
      <div className={cx('select-quiz')}>
        <h4>Select a Quiz</h4>
        <Select
          value={selectedQuiz || ''}
          defaultValue={selectedQuiz}
          onChange={setSelectedQuiz}
          options={listQuiz}
        />
      </div>
      {questions &&
        questions.length > 0 &&
        questions.map((q) => (
          <QuestionAnswer
            onClickQuestion={handleQuestion}
            onClickAnswer={handleAnswer}
            onChange={handleOnChange}
            data={q}
            key={q.id}
          />
        ))}
      <ButtonComponent
        onClick={handleSubmit}
        classOriginal='btn-color'
        className={cx('save-btn')}
        left={<RiAddFill />}
      >
        Update Questions
      </ButtonComponent>
    </div>
  )
}

export default UpdateQuestion
