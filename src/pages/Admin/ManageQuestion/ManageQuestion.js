import classNames from 'classnames/bind'
import styles from './ManageQuestion.module.scss'
import AddQuestion from './AddQuestion'
import UpdateQuestion from './UpdateQuestion'
import AssignUser from './AssignUser'

const cx = classNames.bind(styles)

function ManageQuestion() {
  return (
    <div className={cx('manage-question')}>
      <div className={cx('component')}>
        <AddQuestion />
      </div>
      <div className={cx('component')}>
        <UpdateQuestion />
      </div>
      <div className={cx('component')}>
        <AssignUser />
      </div>
    </div>
  )
}

export default ManageQuestion
