import classNames from 'classnames/bind'
import styles from './TableQuiz.module.scss'

const cx = classNames.bind(styles)

function TableQuiz() {
  return (
    <>
      <h2>Table Quiz</h2>
      <table className={cx('content-table')}>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>Username</td>
            <td>Email</td>
            <td>Role</td>
            <td>Actions</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default TableQuiz
