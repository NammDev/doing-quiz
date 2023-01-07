import Form from 'react-bootstrap/Form'
import classNames from 'classnames/bind'
import styles from './Modal.module.scss'
import { ModalComponent } from '~/components/ModalComponent'
import Select from 'react-select'
import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import { putQuiz } from '~/services/quiz'

const cx = classNames.bind(styles)
const options = [
  { value: 'EASY', label: 'EASY' },
  { value: 'MEDIUM', label: 'MEDIUM' },
  { value: 'HARD', label: 'HARD' },
]

function ModalUpdateQuiz({ show, setShow, data, reRender }) {
  const [type, setType] = useState(null)
  const [quizName, setQuizName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [previewImage, setPreviewImage] = useState('')

  async function urltoFile(url, filename, mimeType) {
    mimeType = mimeType || (url.match(/^data:([^;]+);/) || '')[1]
    const res = await fetch(url)
    const buf = await res.arrayBuffer()
    return new File([buf], filename, { type: mimeType })
  }

  useEffect(() => {
    async function changeFile() {
      const isEmpty = Object.keys(data).length === 0
      if (!isEmpty) {
        const { image, name, description, difficulty, id } = data
        setType({ value: difficulty, label: difficulty })
        setQuizName(name)
        setDescription(description)
        setPreviewImage(`data:image/jpeg;base64,${image}`)
        const imageFile = await urltoFile(`data:image/png;base64,${image}`, `Quiz-Image-${id}.png`)
        setImage(imageFile)
      }
    }
    changeFile()
  }, [data])

  const handleUpload = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
      setPreviewImage(URL.createObjectURL(e.target.files[0]))
    } else {
      setPreviewImage('')
    }
  }

  const updateApi = async () => {
    const res = await putQuiz(data.id, description, quizName, type?.value, image)
    if (res && res.EC === 0) {
      toast.success(res.EM)
      setShow(false)
      reRender()
    } else {
      toast.error(res.EM)
    }
  }

  const handleSubmitQuiz = () => {
    if (!quizName || !description) {
      toast.error('Name/Description is required')
      return
    }
    updateApi()
  }

  return (
    <ModalComponent
      onSubmit={handleSubmitQuiz}
      onClose={() => setShow(false)}
      show={show}
      heading='Update Quiz'
      footer='Update Quiz'
    >
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
          <Select value={type} onChange={setType} options={options} />
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
        <div className={cx('form-group-half', 'container-img')}>
          {previewImage ? (
            <img alt='preview_avatar' src={previewImage} className={cx('img')} />
          ) : (
            <h4 style={{ opacity: '0.7' }}>Preview Image</h4>
          )}
        </div>
      </Form>
    </ModalComponent>
  )
}

export default ModalUpdateQuiz
