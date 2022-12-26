import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { ModalComponent } from '~/components/ModalComponent'
import styles from './ManageUser.module.scss'
import { getUser, createUser } from '~/services'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)

function ManageUser() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('USER')
  const [previewImage, setPreviewImage] = useState('')
  const [image, setImage] = useState('')
  const [show, setShow] = useState(false)

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
    const isValidateUsername = userName.length >= 6
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
      const res = await createUser(email, password, userName, role, image)
      if (res && res.EC === 0) {
        toast.success(res.EM)
        handleCloseModal()
      } else {
        toast.error(res.EM)
      }
    }
    isSuccess && postApi()
  }

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getUser(1, 10)
      // console.log(res.DT.users)
    }
    fetchApi()
  }, [])

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
      <p>Table User</p>
    </div>
  )
}

export default ManageUser
