import classNames from 'classnames/bind'
import styles from './AddQuestion.module.scss'
import Select from 'react-select'
import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import QuestionAnswer from './QuestionAnswer'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'

const cx = classNames.bind(styles)
const options = [
  { value: 'EASY', label: 'EASY' },
  { value: 'MEDIUM', label: 'MEDIUM' },
  { value: 'HARD', label: 'HARD' },
]

function AddQuestion() {
  const [type, setType] = useState(options)
  const [questions, setQuestions] = useState([
    {
      id: uuidv4(),
      description: 'Q1',
      imageFile: '',
      imageName: '',
      answers: [{ id: uuidv4(), description: 'answer 1', isCorrect: false }],
    },
  ])

  const handleSubmitQuestion = (type, id) => {
    switch (type) {
      case 'ADD':
        const newQuestion = {
          id: uuidv4(),
          description: 'Q2',
          imageFile: '',
          imageName: '',
          answers: [{ id: uuidv4(), description: 'answer 2', isCorrect: false }],
        }
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
      const newAnswer = { id: uuidv4(), description: 'answer 1', isCorrect: false }
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

  return (
    <Accordion className='custom-acc' flush>
      <Accordion.Header>
        <h3>Manage Quizzes</h3>
      </Accordion.Header>
      <Accordion.Body>
        <div className={cx('container')}>
          <div className={cx('select-quiz')}>
            <h4>Select a Quiz</h4>
            <Select defaultValue={type[0]} onChange={setType} options={options} />
          </div>
          {questions &&
            questions.map((q) => (
              <QuestionAnswer
                onClickQuestion={handleSubmitQuestion}
                onClickAnswer={handleAnswer}
                data={q}
                key={q.id}
              />
            ))}
        </div>
      </Accordion.Body>
    </Accordion>
  )
}

export default AddQuestion
