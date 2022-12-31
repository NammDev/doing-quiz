import styles from './Question.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Question({ question, id }) {
  return (
    <div className={cx('question')}>
      {question?.image ? (
        <img className={cx('question-img')} src={`data:image/jpeg;base64,${question.image}`} />
      ) : (
        <></>
      )}
      <div className={cx('question-body')}>
        <div className={cx('question-body-question')}>
          {id}. {question.description}
        </div>
        <div className={cx('question-body-list')}>
          <label className={cx('question-body-answer', 'active')}>
            <input type='radio' />
            <span className={cx('checkmark')}>Japan Anti Virus</span>
          </label>
          {question?.answers?.map((answer) => (
            <label key={answer.id} className={cx('question-body-answer')}>
              <input type='radio' />
              <span className={cx('checkmark')}>{answer.description}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Question
