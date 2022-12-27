import Form from 'react-bootstrap/Form'
import classNames from 'classnames/bind'
import styles from './ManageUser.module.scss'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { updateUser } from '~/services'
import { ModalComponent } from '~/components/ModalComponent'

const cx = classNames.bind(styles)

function ModalUpdateUser({ show, setShow, data, reRender }) {
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('USER')
  const [previewImage, setPreviewImage] = useState('')
  const [imageUpload, setImageUpload] = useState('')

  useEffect(() => {
    const isEmpty = Object.keys(data).length === 0
    if (!isEmpty) {
      const { email, username, role, image } = data
      setEmail(email)
      setUserName(username)
      setRole(role)
      image && setPreviewImage(`data:image/jpeg;base64,${image}`)
    }
  }, [data])

  const handleCloseModal = () => {
    setShow(false)
  }

  const handleUpload = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]))
      setImageUpload(e.target.files[0])
    } else {
      setPreviewImage('')
    }
  }

  const updateApi = async () => {
    const res = await updateUser(data.id, userName, role, imageUpload)
    if (res && res.EC === 0) {
      toast.success(res.EM)
      handleCloseModal()
      reRender()
    } else {
      toast.error(res.EM)
    }
  }

  const validate = (email, userName) => {
    const isValidateEmail = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    const isValidateUsername = userName.length >= 3
    if (!isValidateEmail) {
      toast.error('Invalid Email')
    } else if (!isValidateUsername) {
      toast.error('Invalid Username')
    }
    return isValidateEmail && isValidateUsername
  }

  const handleSubmitUpdateUser = () => {
    validate(email, userName) && updateApi()
  }

  return (
    <ModalComponent
      onSubmit={handleSubmitUpdateUser}
      onClose={handleCloseModal}
      show={show}
      heading='Update a User'
      footer='Update User'
    >
      <Form className={cx('form')}>
        <Form.Group className={cx('form-group-half')} controlId='userEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control disabled type='email' placeholder='Enter email' value={email} />
        </Form.Group>

        <Form.Group className={cx('form-group-half')} controlId='userPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' disabled placeholder='Password' />
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
  )
}

export default ModalUpdateUser
