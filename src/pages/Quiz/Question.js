import styles from './Question.module.scss'
import classNames from 'classnames/bind'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function Question({ question, id, handleClickRadio }) {
  const handleOnClick = (e, answerSelected) => {
    handleClickRadio(answerSelected)
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
              className={cx('question-body-answer', answer.isSelected && 'active')}
            >
              <input
                type='checkbox'
                value={answer.id}
                checked={answer.isSelected}
                onChange={(e) => handleOnClick(e, answer.id)}
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
