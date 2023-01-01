import classNames from 'classnames/bind'
import styles from './ManageQuiz.module.scss'
import TableQuiz from './TableQuiz'
import CreateQuiz from './CreateQuiz'

const cx = classNames.bind(styles)

function ManageQuiz() {
  return (
    <>
      <div className={cx('component')}>
        <CreateQuiz />
      </div>
      <div className={cx('component')}>
        <TableQuiz />
      </div>
    </>
  )
}

export default ManageQuiz
