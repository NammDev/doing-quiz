import styles from './Quiz.module.scss'
import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'
import { getQuestionByQuiz } from '~/services/question'
import { useSelector } from 'react-redux'
import { useParams, useLocation, Link } from 'react-router-dom'
import _ from 'lodash'
import { IoMdStopwatch } from 'react-icons/io'
import config from '~/config'

const cx = classNames.bind(styles)

function Quiz() {
  const { state } = useLocation()
  let { quizId } = useParams()
  const token = useSelector((state) => state.user.account.access_token)

  const [listQuestion, setListQuestion] = useState([])

  const fetchQuestion = async () => {
    const data = await getQuestionByQuiz(quizId, token)
    if (data && data.EC === 0) {
      const listQuiz = _.chain(data.DT)
        .groupBy('id')
        .map((value, key) => ({
          answers: value.map((answer) => answer.answers),
          description: value[0].description,
          id: key,
          image: value[0].image,
        }))
        .value()
      setListQuestion(listQuiz)
    }
  }

  useEffect(() => {
    fetchQuestion()
  }, [])

  return (
    <div className={cx('quiz-page')}>
      <div className='container'>
        <div className={cx('header')}>
          <p>
            <Link to={config.routes.home}>Typeform / </Link>
            <Link to={config.routes.profile}>User / </Link>Quiz: {state?.quizTitle}
          </p>
        </div>
        <div className={cx('quiz-container')}>
          <div className={cx('quiz')}>
            <img
              className={cx('quiz-img')}
              src='https://www.shutterstock.com/image-photo/example-word-written-on-wooden-260nw-1765482248.jpg'
            />
            <div className={cx('quiz-body')}>
              <div className={cx('quiz-body-question')}>1. JAV là gì?</div>
              <div className={cx('quiz-body-list')}>
                <label className={cx('quiz-body-answer', 'active')}>
                  <input type='radio' />
                  <span className={cx('checkmark')}>Japan Anti Virus</span>
                </label>
                <label className={cx('quiz-body-answer')}>
                  <input type='radio' />
                  <span className={cx('checkmark')}>Japan Anti Virus</span>
                </label>
                <label className={cx('quiz-body-answer')}>
                  <input type='radio' />
                  <span className={cx('checkmark')}>Japan Anti Virus</span>
                </label>
                <label className={cx('quiz-body-answer')}>
                  <input type='radio' />
                  <span className={cx('checkmark')}>Japan Anti Virus</span>
                </label>
              </div>
            </div>

            <div className={cx('quiz-footer')}>
              <button className={cx('btn', 'prev')}>Prev Question</button>
              <button className={cx('btn', 'next')}>Next Question</button>
            </div>
          </div>
          <div className={cx('question')}>
            <div className={cx('question-container')}>
              <div className={cx('question-countdown')}>
                <IoMdStopwatch />
                <span>04:58</span>
              </div>
              <div className={cx('question-list')}>
                {listQuestion &&
                  listQuestion.map((q, i) => (
                    <div key={i} className={cx('question-choose')}>
                      {i + 1}
                    </div>
                  ))}
                <div className={cx('question-choose', 'active')}>4</div>
              </div>
            </div>
            <button className={cx('btn', 'question-btn')}>Submit Exam</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
