import styles from './Question.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Question() {
  return (
    <div className={cx('question')}>
      <img
        className={cx('question-img')}
        src='https://www.shutterstock.com/image-photo/example-word-written-on-wooden-260nw-1765482248.jpg'
      />
      <div className={cx('question-body')}>
        <div className={cx('question-body-question')}>1. JAV là gì?</div>
        <div className={cx('question-body-list')}>
          <label className={cx('question-body-answer', 'active')}>
            <input type='radio' />
            <span className={cx('checkmark')}>Japan Anti Virus</span>
          </label>
          <label className={cx('question-body-answer')}>
            <input type='radio' />
            <span className={cx('checkmark')}>Japan Anti Virus</span>
          </label>
          <label className={cx('question-body-answer')}>
            <input type='radio' />
            <span className={cx('checkmark')}>Japan Anti Virus</span>
          </label>
          <label className={cx('question-body-answer')}>
            <input type='radio' />
            <span className={cx('checkmark')}>Japan Anti Virus</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Question
