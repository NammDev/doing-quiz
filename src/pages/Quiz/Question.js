import styles from './Question.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function Question({ question, id }) {
  const [radio, setRadio] = useState(0)

  const handleOnClick = (e) => {
    setRadio(e.target.value)
  }

  return (
    <div className={cx('question')}>
      <img
        className={cx('question-img')}
        src={question?.image ? `data:image/jpeg;base64,${question.image}` : images.typeForm}
      />

      <div className={cx('question-body')}>
        <div className={cx('question-body-question')}>
          {id}. {question.description}
        </div>
        <div className={cx('question-body-list')}>
          {question?.answers?.map((answer) => (
            <label
              key={answer.id}
              className={cx(
                'question-body-answer',
                parseInt(radio) === parseInt(answer.id, 10) && 'active'
              )}
            >
              <input
                type='radio'
                value={answer.id}
                checked={parseInt(radio) === parseInt(answer.id, 10)}
                onChange={(e) => handleOnClick(e)}
              />
              <span className={cx('checkmark')}>{answer.description}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Question
