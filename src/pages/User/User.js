import { useState } from 'react'
import { Modal, Tabs, Tab } from 'react-bootstrap'
import styles from './User.module.scss'
import classNames from 'classnames/bind'
import UserUpdatePass from './UserUpdatePass'
import { useSelector } from 'react-redux'
import UserHistory from './UserHistory'
import UserProfile from './UserProfile'

const cx = classNames.bind(styles)

function User({ show, setShow }) {
  const user = useSelector((state) => state.user)
  const { account } = user

  const [key, setKey] = useState('profile')

  return (
    <Modal show={show} onHide={() => setShow(false)} dialogClassName={'modal-60w'}>
      <Modal.Header closeButton>
        <Modal.Title>Quản Lý Thông Tin Người Dùng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey='profile' title='User Information'>
              <UserProfile data={account} />
            </Tab>
            <Tab eventKey='password' title='Change Password'>
              <UserUpdatePass account={account} />
            </Tab>
            <Tab eventKey='history' title='History'>
              <UserHistory />
            </Tab>
          </Tabs>
        </>
      </Modal.Body>
    </Modal>
  )
}

export default User
