import styles from './Quiz.module.scss'
import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'
import { getQuestionByQuiz } from '~/services/question'
import { useSelector } from 'react-redux'
import { useParams, useLocation, Link } from 'react-router-dom'
import _ from 'lodash'
import config from '~/config'
import Question from './Question'
import Countdown from './Countdown'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)

function Quiz() {
  const { state } = useLocation()
  let { quizId } = useParams()
  const token = useSelector((state) => state.user.account.access_token)

  const [listQuestion, setListQuestion] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)

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
  }, [quizId])

  const handlePrev = () => {
    if (currentQuestion === 0) {
      toast.warn('This is First Question')
    } else {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion === listQuestion.length - 1) {
      toast.warn('This is Last Question')
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  return (
    <div className={cx('quiz-page')}>
      <div className='container'>
        <div className={cx('header')}>
          <p>
            <Link to={config.routes.home}>Typeform / </Link>
            <Link to={config.routes.profile}>User / </Link>Quiz: {state?.quizTitle}
          </p>
        </div>
        <div className={cx('body')}>
          <div className={cx('left')}>
            <Question
              question={listQuestion.length > 0 ? listQuestion[currentQuestion] : {}}
              id={currentQuestion + 1}
            />
            <div className={cx('left-footer')}>
              <button className={cx('btn', 'prev')} onClick={handlePrev}>
                Prev Question
              </button>
              <button className={cx('btn', 'next')} onClick={handleNext}>
                Next Question
              </button>
            </div>
          </div>
          <div className={cx('right')}>
            <Countdown
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              listQuestion={listQuestion}
            />
            <button className={cx('btn', 'right-footer')}>Submit Exam</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
