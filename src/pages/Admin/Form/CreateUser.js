import Form from 'react-bootstrap/Form'
import classNames from 'classnames/bind'
import { useState } from 'react'
import styles from './CreateUser.module.scss'

const cx = classNames.bind(styles)
function CreateUser() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('USER')
  const [previewImage, setPreviewImage] = useState('')
  const [image, setImage] = useState('')

  const handleUpload = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]))
      setImage(e.target.files[0])
    } else {
      setPreviewImage('')
    }
  }

  return (
    <Form className={cx('form')}>
      <Form.Group className={cx('form-group-half')} controlId='userEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </Form.Group>

      <Form.Group className={cx('form-group-half')} controlId='userPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </Form.Group>

      <Form.Group className={cx('form-group-half')} controlId='userName'>
        <Form.Label>UserName</Form.Label>
        <Form.Control
          type='text'
          placeholder='Username'
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
      </Form.Group>

      <Form.Group className={cx('form-group-half')} controlId='userRole'>
        <Form.Label>Role</Form.Label>
        <Form.Select
          value={role}
          onChange={(e) => {
            setRole(e.target.value)
          }}
        >
          <option default value='USER'>
            USER
          </option>
          <option value='ADMIN'>ADMIN</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className={cx('form-group-half', 'item-start')} controlId='userImage'>
        <Form.Label>Pick User's Avatar</Form.Label>
        <Form.Control
          type='file'
          onChange={(e) => {
            handleUpload(e)
          }}
        />
      </Form.Group>

      <div className={cx('form-group-half', 'container-img')}>
        {previewImage ? (
          <img src={previewImage} className={cx('img')} />
        ) : (
          <h4 style={{ opacity: '0.7' }}>Preview Image</h4>
        )}
      </div>
    </Form>
  )
}

export default CreateUser
