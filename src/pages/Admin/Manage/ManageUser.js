import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import classNames from 'classnames/bind'
import { toast } from 'react-toastify'
import { createUser } from '~/services'
import { ModalComponent } from '~/components/ModalComponent'
import styles from './ManageUser.module.scss'
import TableUser from './TableUser'
import { getAllUsers } from '~/services'

const cx = classNames.bind(styles)

function ManageUser() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('USER')
  const [previewImage, setPreviewImage] = useState('')
  const [image, setImage] = useState('')
  const [listUsers, setListUsers] = useState([])

  const fetchListUsers = async () => {
    const data = await getAllUsers()
    if (data.EC === 0) {
      setListUsers(data.DT)
    } else {
      toast(data.EM)
    }
  }

  // render() => useEffect([])
  useEffect(() => {
    fetchListUsers()
  }, [])

  const handleCloseModal = () => {
    setShow(false)
    setEmail('')
    setPassword('')
    setUserName('')
    setRole('USER')
    setImage('')
    setPreviewImage('')
  }

  const handleUpload = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]))
      setImage(e.target.files[0])
    } else {
      setPreviewImage('')
    }
  }

  const handleSubmitCreateUser = () => {
    let isSuccess = false
    // validate
    const isValidateEmail = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    const isValidateUsername = userName.length >= 3
    const isValidatePassword = password
    if (!isValidateEmail) {
      toast.error('Invalid Email')
    } else if (!isValidateUsername) {
      toast.error('Invalid Username')
    } else if (!isValidatePassword) {
      toast.error('Please enter password')
    }
    isSuccess = isValidateEmail && isValidateUsername && isValidatePassword
    // submit data
    const postApi = async () => {
      const data = await createUser(email, password, userName, role, image)
      if (data && data.EC === 0) {
        toast.success(data.EM)
        handleCloseModal()
        fetchListUsers()
      } else {
        toast.error(data.EM)
      }
    }
    isSuccess && postApi()
  }

  return (
    <div className={cx('manage-user')}>
      <h2>ManagerUser</h2>
      <ModalComponent
        onSubmit={handleSubmitCreateUser}
        onClose={handleCloseModal}
        show={show}
        onShow={() => setShow(true)}
      >
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
              <img alt='preview_avatar' src={previewImage} className={cx('img')} />
            ) : (
              <h4 style={{ opacity: '0.7' }}>Preview Image</h4>
            )}
          </div>
        </Form>
      </ModalComponent>
      <TableUser listUsers={listUsers} />
    </div>
  )
}

export default ManageUser
