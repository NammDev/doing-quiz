import styles from './Countdown.module.scss'
import classNames from 'classnames/bind'
import { IoMdStopwatch } from 'react-icons/io'

const cx = classNames.bind(styles)

function Countdown({ listQuestion, currentQuestion, setCurrentQuestion }) {
  return (
    <div className={cx('countdown')}>
      <div className={cx('countdown-container')}>
        <div className={cx('countdown-countdown')}>
          <IoMdStopwatch />
          <span>04:58</span>
        </div>
        <div className={cx('countdown-list')}>
          {listQuestion &&
            listQuestion.map((q, i) => (
              <div
                key={i}
                className={cx('countdown-choose', currentQuestion === i && 'active')}
                onClick={() => setCurrentQuestion(i)}
              >
                {i + 1}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Countdown
