import classNames from 'classnames/bind'
import styles from './ManageUser.module.scss'
import { useState, useEffect } from 'react'
import { getAllUsers } from '~/services'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)

function TableUser() {
  const [listUsers, setListUsers] = useState([])

  const fetchApi = async () => {
    const data = await getAllUsers()
    if (data.EC === 0) {
      setListUsers(data.DT)
    } else {
      toast(data.EM)
    }
  }

  // render() => useEffect([])
  useEffect(() => {
    fetchApi()
  }, [])

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
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <ul>
                  <li>View</li>
                  <li>Update</li>
                  <li>Delete</li>
                </ul>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default TableUser
