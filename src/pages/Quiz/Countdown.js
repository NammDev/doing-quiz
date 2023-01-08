import styles from './Countdown.module.scss'
import classNames from 'classnames/bind'
import { IoMdStopwatch } from 'react-icons/io'
import { useState, useEffect } from 'react'

const cx = classNames.bind(styles)

function Countdown({ listQuestion, currentQuestion, handleOnClick, onTimeUp, isStop }) {
  const [timeLeft, setTimeLeft] = useState(360)

  useEffect(() => {
    if (!timeLeft) {
      onTimeUp()
      return
    }
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)
    if (isStop) {
      clearInterval(intervalId)
    }
    return () => clearInterval(intervalId)
  }, [timeLeft])

  const toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10)
    var hours = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? '0' + v : v))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':')
  }

  const getClassAnswer = (q, i) => {
    if (q && q.answers.length > 0) {
      if (q.answers.find((a) => a.isSelected === true)) {
        return 'isAnswer'
      } else {
        return ''
      }
    }
  }

  return (
    <div className={cx('countdown')}>
      <div className={cx('countdown-container')}>
        <div className={cx('countdown-countdown')}>
          <IoMdStopwatch />
          <span>{toHHMMSS(timeLeft)}</span>
        </div>
        <div className={cx('countdown-list')}>
          {listQuestion &&
            listQuestion.map((q, i) => (
              <div
                key={i}
                className={cx(
                  'countdown-choose',
                  currentQuestion === i && 'active',
                  getClassAnswer(q, i)
                )}
                onClick={() => handleOnClick(i)}
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
