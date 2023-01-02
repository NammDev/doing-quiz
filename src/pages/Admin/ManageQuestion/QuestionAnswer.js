import classNames from 'classnames/bind'
import styles from './QuestionAnswer.module.scss'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { RiAddCircleLine, RiDeleteBin6Line, RiImage2Line } from 'react-icons/ri'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'

const cx = classNames.bind(styles)

function QuestionAnswer({ onSubmit, data }) {
  const [previewImage, setPreviewImage] = useState('')
  const [image, setImage] = useState('')

  const handleUpload = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]))
      setImage(e.target.files[0])
    } else {
      setPreviewImage('')
    }
  }

  return (
    <div className={cx('wrapper')}>
      <Form>
        <div className={cx('question')}>
          <Form.Control type='text' placeholder='Add New Quiz ...' />
          <label>
            <input
              type='file'
              onChange={(e) => {
                handleUpload(e)
              }}
            />
            <RiImage2Line />
          </label>
        </div>

        <div className={cx('preview')}>
          {previewImage ? <img alt='preview_avatar' src={previewImage} /> : <></>}
        </div>

        <div className={cx('answer')}>
          <Form.Check type='checkbox' />
          <Form.Control type='text' placeholder='Answer 1' />
          <div className={cx('answer-action')}>
            <RiAddCircleLine style={{ color: 'green' }} />
            <RiDeleteBin6Line style={{ color: 'red' }} />
          </div>
        </div>
      </Form>
      <hr />
      <div className={cx('action')}>
        <RiDeleteBin6Line style={{ color: 'red' }} onClick={() => onSubmit('REMOVE', data.id)} />
        <div>
          <HiOutlineDocumentDuplicate onClick={() => onSubmit('COPY', data.id)} />
          <RiAddCircleLine style={{ color: 'green' }} onClick={() => onSubmit('ADD', data.id)} />
        </div>
      </div>
    </div>
  )
}

export default QuestionAnswer
