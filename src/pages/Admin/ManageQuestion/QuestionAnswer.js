import classNames from 'classnames/bind'
import styles from './QuestionAnswer.module.scss'
import { Form } from 'react-bootstrap'
import { memo, useState } from 'react'
import { RiAddCircleLine, RiDeleteBin6Line, RiImage2Line } from 'react-icons/ri'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'

const cx = classNames.bind(styles)

function QuestionAnswer({ onClickQuestion, data, onClickAnswer, onChange }) {
  const [previewImage, setPreviewImage] = useState('')

  const handleUpload = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]))
      onChange('FILE', data.id, e.target.files[0])
    } else {
      setPreviewImage('')
      onChange('FILE', data.id, e.target.files[0])
    }
  }

  return (
    <div className={cx('wrapper')}>
      <Form>
        <div className={cx('question')}>
          <Form.Control
            type='text'
            placeholder='Question Description'
            value={data.description}
            onChange={(e) => onChange('TEXT', data.id, e.target.value)}
          />
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

        {data.answers &&
          data.answers.map((a) => (
            <div key={a.id} className={cx('answer')}>
              <Form.Check
                type='checkbox'
                checked={a.isCorrect}
                onChange={(e) =>
                  onChange('ANSWER', data.id, { type: 'CHECKBOX', value: e.target.checked }, a.id)
                }
              />
              <Form.Control
                type='text'
                placeholder='Answer 1'
                value={a.description}
                onChange={(e) =>
                  onChange('ANSWER', data.id, { type: 'TEXT', value: e.target.value }, a.id)
                }
              />
              <div className={cx('answer-action')}>
                <RiAddCircleLine
                  style={{ color: 'green' }}
                  onClick={() => onClickAnswer('ADD', data.id)}
                />
                <RiDeleteBin6Line
                  style={{ color: 'red' }}
                  onClick={() => onClickAnswer('REMOVE', data.id, a.id)}
                />
              </div>
            </div>
          ))}
      </Form>
      <hr />
      <div className={cx('action')}>
        <RiDeleteBin6Line
          style={{ color: 'red' }}
          onClick={() => onClickQuestion('REMOVE', data.id)}
        />
        <div>
          <HiOutlineDocumentDuplicate onClick={() => onClickQuestion('COPY', data.id)} />
          <RiAddCircleLine style={{ color: 'green' }} onClick={() => onClickQuestion('ADD')} />
        </div>
      </div>
    </div>
  )
}

export default QuestionAnswer
