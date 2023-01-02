import classNames from 'classnames/bind'
import styles from './CreateQuiz.module.scss'
import Select from 'react-select'
import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import ButtonComponent from '~/components/Button/Button'
import { toast } from 'react-toastify'
import { postQuiz } from '~/services/quiz'
import Accordion from 'react-bootstrap/Accordion'

const cx = classNames.bind(styles)
const options = [
  { value: 'EASY', label: 'EASY' },
  { value: 'MEDIUM', label: 'MEDIUM' },
  { value: 'HARD', label: 'HARD' },
]

function CreateQuiz() {
  const [type, setType] = useState(null)
  const [quizName, setQuizName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const handleUpload = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const postApi = async () => {
    console.log(description, quizName, type?.value, image)
    const data = await postQuiz(description, quizName, type?.value, image)
    if (data && data.EC === 0) {
      toast.success(data.EM)
      setQuizName('')
      setDescription('')
      setImage(null)
    } else {
      toast.error(data.EM)
    }
  }

  const handleSubmitQuiz = () => {
    if (!quizName || !description) {
      toast.error('Name/Description is required')
      return
    }
    postApi()
  }

  return (
    <>
      <Accordion className='custom-acc' flush>
        <Accordion.Header>
          <h2>Add New Quiz</h2>
        </Accordion.Header>
        <Accordion.Body>
          <Form className={cx('form')}>
            <Form.Group className={cx('form-group-half')} controlId='quizName'>
              <Form.Label>Quiz Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Add New Quiz ...'
                value={quizName}
                onChange={(e) => {
                  setQuizName(e.target.value)
                }}
              />
            </Form.Group>

            <Form.Group className={cx('form-group-half')} controlId='description'>
              <Form.Label>Quiz Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Description'
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
              />
            </Form.Group>

            <Form.Group className={cx('form-group-half')} controlId='quizLevel'>
              <Form.Label>Pick Quiz's Level</Form.Label>
              <Select defaultValue={type} onChange={setType} options={options} />
            </Form.Group>

            <Form.Group className={cx('form-group-half')} controlId='quizImage'>
              <Form.Label>Pick User's Avatar</Form.Label>
              <Form.Control
                type='file'
                onChange={(e) => {
                  handleUpload(e)
                }}
              />
            </Form.Group>
          </Form>
          <ButtonComponent
            classOriginal='btn-color'
            className={cx('btn')}
            onClick={handleSubmitQuiz}
          >
            Save Quiz
          </ButtonComponent>
        </Accordion.Body>
      </Accordion>
    </>
  )
}

export default CreateQuiz
