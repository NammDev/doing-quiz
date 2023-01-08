import Form from 'react-bootstrap/Form'
import classNames from 'classnames/bind'
import styles from './User.module.scss'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { updateUser } from '~/services/users'
import ButtonComponent from '~/components/Button/Button'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function UserProfile({ data }) {
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
  }, [])

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
    <>
      <Form className={cx('form')}>
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

        <Form.Group className={cx('form-group-half')} controlId='userEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control disabled type='email' placeholder='Enter email' value={email} />
        </Form.Group>

        <div className={cx('role-image')}>
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
        </div>
        <div className={cx('form-group-half', 'container-img')}>
          {previewImage ? (
            <img alt='preview_avatar' src={previewImage} className={cx('img')} />
          ) : (
            <img
              style={{ opacity: '0.7' }}
              alt='preview_avatar'
              src={images.noAvatar}
              className={cx('img')}
            />
          )}
        </div>
      </Form>
      <ButtonComponent onClick={handleSubmitUpdateUser} className={cx('update-pass-btn')} primary>
        Update User
      </ButtonComponent>
    </>
  )
}

export default UserProfile
