import styles from './Quiz.module.scss'
import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'
import { getQuestionByQuiz } from '~/services/question'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const cx = classNames.bind(styles)

function Quiz() {
  let { quizId } = useParams()
  const token = useSelector((state) => state.user.account.access_token)

  const [listQuestion, setListQuestion] = useState([])

  const fetchQuestion = async () => {
    const data = await getQuestionByQuiz(quizId, token)
    if (data && data.EC === 0) {
      setListQuestion(data.DT)
    }
  }

  useEffect(() => {
    fetchQuestion()
  }, [])

  return (
    <div className={cx('quiz')}>
      <h1>Quiz {quizId}</h1>
    </div>
  )
}

export default Quiz
