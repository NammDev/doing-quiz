import classNames from 'classnames/bind'
import styles from './ManageUser.module.scss'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { BsPencilFill } from 'react-icons/bs'
import { TiDelete } from 'react-icons/ti'

const cx = classNames.bind(styles)

function TableUser({ listUsers, onUpdate }) {
  return (
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
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <ul className={cx('table-actions')}>
                  <li>
                    <AiOutlineFolderOpen size={20} className='hover-big' />
                  </li>
                  <li>
                    <BsPencilFill
                      size={16}
                      className='hover-big'
                      style={{ color: 'green' }}
                      onClick={() => onUpdate(user)}
                    />
                  </li>
                  <li>
                    <TiDelete size={20} className='hover-big' style={{ color: 'red' }} />
                  </li>
                </ul>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default TableUser
