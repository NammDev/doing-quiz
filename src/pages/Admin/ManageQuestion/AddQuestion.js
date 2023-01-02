import classNames from 'classnames/bind'
import styles from './AddQuestion.module.scss'
import Select from 'react-select'
import { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import QuestionAnswer from './QuestionAnswer'
import { v4 as uuidv4 } from 'uuid'
import _, { create } from 'lodash'
import ButtonComponent from '~/components/Button/Button'
import { RiAddFill } from 'react-icons/ri'
import { getAllQuizForAdmin } from '~/services/quiz'
import { postCreateQuestionForQuiz, postCreateAnswerforQuestion } from '~/services/question'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)
const NEW_QUESTION = {
  id: uuidv4(),
  description: '',
  imageFile: '',
  imageName: '',
  answers: [{ id: uuidv4(), description: '', isCorrect: false }],
}

function AddQuestion() {
  const [selectedQuiz, setSelectedQuiz] = useState()
  const [questions, setQuestions] = useState([NEW_QUESTION])
  const [listQuiz, setListQuiz] = useState([])

  const fetchApi = async () => {
    const data = await getAllQuizForAdmin()
    if (data && data.EC === 0) {
      const newListQuiz = data.DT.map((q) => ({ value: q.id, label: `${q.id} - ${q.description}` }))
      setListQuiz(newListQuiz)
    }
  }

  useEffect(() => {
    fetchApi()
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

  const handleSubmit = async () => {
    // await Promise.all(
    //   questions.map(async (q) => {
    //     const resQuestion = await postCreateQuestionForQuiz(
    //       +selectedQuiz.value,
    //       q.description,
    //       q.imageFile
    //     )
    //     await Promise.all(
    //       q.answers.map(async (a) => {
    //         await postCreateAnswerforQuestion(resQuestion.DT.id, a.description, a.isCorrect)
    //       })
    //     )
    //   })
    // )
    for (const q of questions) {
      const resQuestion = await postCreateQuestionForQuiz(
        +selectedQuiz.value,
        q.description,
        q.imageFile
      )
      for (const a of q.answers) {
        await postCreateAnswerforQuestion(resQuestion.DT.id, a.description, a.isCorrect)
      }
    }
    const newQuestion = { ...NEW_QUESTION, id: uuidv4() }
    setQuestions([newQuestion])
    toast.success(`Success Add Questions & Answer for ${selectedQuiz.label}`)
    setSelectedQuiz('')
  }

  return (
    <Accordion className='custom-acc' flush>
      <Accordion.Header>
        <h3>Manage Quizzes</h3>
      </Accordion.Header>
      <Accordion.Body>
        <div className={cx('container')}>
          <div className={cx('select-quiz')}>
            <h4>Select a Quiz</h4>
            <Select defaultValue={selectedQuiz} onChange={setSelectedQuiz} options={listQuiz} />
          </div>
          {questions &&
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
            Save New Questions
          </ButtonComponent>
        </div>
      </Accordion.Body>
    </Accordion>
  )
}

export default AddQuestion
