import styles from './Quiz.module.scss'
import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'
import { getQuestionByQuiz } from '~/services/question'
import { postSubmitAnswer } from '~/services/answer'
import { useParams, useLocation, Link } from 'react-router-dom'
import _ from 'lodash'
import config from '~/config'
import Question from './Question'
import Countdown from './Countdown'
import { toast } from 'react-toastify'
import ButtonComponent from '~/components/Button/Button'
import ModalAnswer from './ModalAnswer'

const cx = classNames.bind(styles)

function Quiz() {
  const { state } = useLocation()
  let { quizId } = useParams()

  const [listQuestion, setListQuestion] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [disablePrev, setDisablePrev] = useState(false)
  const [disableNext, setDisableNext] = useState(false)
  const [isShowModal, SetIsShowModal] = useState(false)
  const [dataModal, setDataModal] = useState({})

  const [isShowAnswer, setIsShowAnswer] = useState(false)
  const [disableSubmit, setDisableSubmit] = useState(false)
  const [isStop, setIsStop] = useState(false)

  const fetchQuestion = async () => {
    const data = await getQuestionByQuiz(quizId)
    if (data && data.EC === 0) {
      const listQuiz = _.chain(data.DT)
        .groupBy('id')
        .map((value, key) => ({
          answers: value.map((quiz) => ({ ...quiz.answers, isSelected: false, isCorrect: false })),
          description: value[0].description,
          id: key,
          image: value[0].image,
        }))
        .value()
      setListQuestion(listQuiz)
    }
  }

  const submitQuestion = async (payload) => {
    const res = await postSubmitAnswer(payload)
    if (res && res.EC === 0) {
      setDataModal({
        countCorrect: res.DT.countCorrect,
        countTotal: res.DT.countTotal,
        quizData: res.DT.quizData,
      })
      SetIsShowModal(true)
    }
  }

  useEffect(() => {
    fetchQuestion()
  }, [quizId])

  useEffect(() => {
    if (currentQuestion === 0) {
      setDisablePrev(true)
    } else if (currentQuestion === listQuestion.length - 1) {
      setDisableNext(true)
    } else {
      setDisableNext(false)
      setDisablePrev(false)
    }
  }, [currentQuestion])

  const handleClickRadio = (answerSelected) => {
    let listQuestionClone = _.cloneDeep(listQuestion)
    listQuestionClone.forEach((question) => {
      question.answers.forEach((answer) => {
        if (answer.id === answerSelected) {
          answer.isSelected = !answer.isSelected
          return
        }
      })
    })
    setListQuestion(listQuestionClone)
  }

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

  const handleSubmit = () => {
    let answers = listQuestion.map((question) => ({
      questionId: parseInt(question.id),
      userAnswerId: question.answers.reduce((listAnswer, answer) => {
        if (answer.isSelected) {
          listAnswer.push(answer.id)
        }
        return listAnswer
      }, []),
    }))
    let payload = {
      quizId: parseInt(quizId),
      answers,
    }
    submitQuestion(payload)
    setDisableSubmit(true)
    setIsStop(true)
  }

  const handleOnClick = (i) => {
    setCurrentQuestion(i)
  }

  const handleShowAnswer = () => {
    SetIsShowModal(false)
    setIsShowAnswer(true)
    const result = dataModal.quizData.map((quiz) => ({
      id: quiz.questionId,
      correctAnswer: quiz.systemAnswers[0].id,
    }))
    const cloneListQuestion = _.cloneDeep(listQuestion)
    for (let i = 0; i < cloneListQuestion.length; i++) {
      if (cloneListQuestion[i].id == result[i].id) {
        cloneListQuestion[i].answers.forEach((a) => {
          if (a.id === result[i].correctAnswer) {
            a.isCorrect = true
          }
        })
      }
    }
    setListQuestion(cloneListQuestion)
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
              handleClickRadio={handleClickRadio}
              isShowAnswer={isShowAnswer}
            />
            <div className={cx('left-footer')}>
              <ButtonComponent
                disabled={disablePrev}
                className={cx('btn', 'prev')}
                onClick={handlePrev}
              >
                Prev Question
              </ButtonComponent>
              <ButtonComponent
                disabled={disableNext}
                className={cx('btn', 'next')}
                onClick={handleNext}
              >
                Next Question
              </ButtonComponent>
            </div>
          </div>
          <div className={cx('right')}>
            <Countdown
              currentQuestion={currentQuestion}
              listQuestion={listQuestion}
              handleOnClick={handleOnClick}
              onTimeUp={handleSubmit}
              isStop={isStop}
            />
            <ButtonComponent
              disabled={isShowAnswer}
              className={cx('btn', 'right-footer')}
              onClick={disableSubmit ? handleShowAnswer : handleSubmit}
            >
              {disableSubmit ? 'Show Answer' : 'Submit Exam'}
            </ButtonComponent>
          </div>
        </div>
      </div>
      <ModalAnswer
        show={isShowModal}
        setShow={SetIsShowModal}
        data={dataModal}
        handleShowAnswer={handleShowAnswer}
      />
    </div>
  )
}

export default Quiz
