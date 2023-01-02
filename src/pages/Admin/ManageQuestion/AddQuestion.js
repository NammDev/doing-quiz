import classNames from 'classnames/bind'
import styles from './AddQuestion.module.scss'
import Select from 'react-select'
import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import QuestionAnswer from './QuestionAnswer'
import { v4 as uuidv4 } from 'uuid'

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
        console.log(id)
        break
      case 'REMOVE':
        console.log(id)
        break
      case 'COPY':
        console.log(id)
        break

      default:
        break
    }
  }

  console.log(questions)
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
              <QuestionAnswer onSubmit={handleSubmitQuestion} data={q} key={q.id} />
            ))}
        </div>
      </Accordion.Body>
    </Accordion>
  )
}

export default AddQuestion
