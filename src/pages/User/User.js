import { useState } from 'react'
import { Modal, Tabs, Tab } from 'react-bootstrap'
import styles from './User.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function User({ show, setShow }) {
  const [key, setKey] = useState('profile')

  return (
    <Modal
      backdrop='static'
      show={show}
      onHide={() => setShow(false)}
      dialogClassName={'modal-60w'}
    >
      <Modal.Header closeButton>
        <Modal.Title>Quản Lý Thông Tin Người Dùng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey='profile' title='User Information'>
              Home
            </Tab>
            <Tab eventKey='password' title='Change Password'>
              Home2
            </Tab>
            <Tab eventKey='history' title='History'>
              Home3
            </Tab>
          </Tabs>
        </>
      </Modal.Body>
    </Modal>
  )
}

export default User
