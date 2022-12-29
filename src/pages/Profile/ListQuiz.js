import styles from './Profile.module.scss'
import classNames from 'classnames/bind'
import Card from '~/components/Card/Card'

const cx = classNames.bind(styles)

function ListQuiz({ listQuiz, access }) {
  return (
    <ul className={cx('card-list')}>
      {listQuiz && listQuiz.map((quiz) => <Card key={quiz.id} card={quiz} access={access} />)}
    </ul>
  )
}

export default ListQuiz
