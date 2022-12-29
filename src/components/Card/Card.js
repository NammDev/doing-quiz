import classNames from 'classnames/bind'
import styles from './Card.module.scss'
import ButtonComponent from '../Button/Button'
import { useState } from 'react'
import { getQuestionByQuiz } from '~/services/question'

const cx = classNames.bind(styles)

function Card({ card, access }) {
  const [listQuestion, setListQuestion] = useState([])

  const fetchQuestion = async () => {
    const data = await getQuestionByQuiz(card.id, access)
    if (data && data.EC === 0) {
      setListQuestion(data.DT)
    }
  }

  const handleStart = () => {
    fetchQuestion(listQuestion)
  }

  console.log(listQuestion)

  return (
    <li className={cx('card')}>
      <div
        className={cx('card-image')}
        style={{
          backgroundImage: `url(data:image/jpeg;base64,${card.image})`,
        }}
      ></div>
      <div className={cx('card-description')}>
        <h3>Quiz {card.id}</h3>
        <p>{card.description}</p>
        <ButtonComponent to='#' primary onClick={handleStart} style={{ margin: '0 auto' }}>
          Start Now
        </ButtonComponent>
      </div>
    </li>
  )
}

export default Card
