import classNames from 'classnames/bind'
import styles from './ManageUser.module.scss'

const cx = classNames.bind(styles)

function TableUser({ users }) {
  return (
    <table className={cx('content-table')}>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableUser
