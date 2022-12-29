import styles from './Quiz.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Quiz() {
  return (
    <div className={cx('quiz')}>
      <h1>Quiz</h1>
    </div>
  )
}

export default Quiz
