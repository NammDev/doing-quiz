import classNames from 'classnames/bind'
import styles from './Card.module.scss'
import ButtonComponent from '../Button/Button'

const cx = classNames.bind(styles)

function Card({ card, to, state }) {
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
        <ButtonComponent to={to} state={state} primary style={{ margin: '0 auto' }}>
          Start Now
        </ButtonComponent>
      </div>
    </li>
  )
}

export default Card
