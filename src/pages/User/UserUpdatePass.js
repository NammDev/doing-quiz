import styles from './User.module.scss'
import classNames from 'classnames/bind'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { useState } from 'react'
import ButtonComponent from '~/components/Button/Button'
import { postChangePassword, postLogout } from '~/services/auth'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { doLogout } from '~/redux/actions/userAction'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function UserUpdatePass({ account }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [currentPassword, setCurrentPassword] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrentPass, setShowCurrentPass] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)

  const logout = async () => {
    const res = await postLogout(account.email, account.refresh_token)
    if (res && res.EC === 0) {
      dispatch(doLogout())
      navigate('/login')
    } else {
      toast.error(res.EM)
    }
  }

  const postApi = async () => {
    const res = await postChangePassword(currentPassword, password)
    if (res && res.EC === 0) {
      toast.success(res.EM)
      logout()
    } else {
      toast.error(res.EM)
    }
  }

  const validate = () => {
    if (!password || !currentPassword || !confirmPassword) {
      toast.error('Please Input password before update')
      return false
    } else if (password != confirmPassword) {
      toast.error('Confirm password is not match password!')
      return false
    } else {
      return true
    }
  }

  const handleSubmit = () => {
    validate() && postApi()
  }

  return (
    <div className={cx('update-pass')}>
      <form className={cx('update-pass-form')}>
        <div className={cx('group')}>
          <div className={cx('label')}>Current Password</div>
          <span className={cx('inputSpan')}>
            <input
              value={currentPassword}
              onChange={(e) => {
                setCurrentPassword(e.target.value)
              }}
              type={showCurrentPass ? 'text' : 'password'}
              placeholder='At least 8 characters?'
              autoComplete='on'
            ></input>
            <span
              className={cx('show-password')}
              onClick={() => setShowCurrentPass(!showCurrentPass)}
            >
              {showCurrentPass ? <ImEyeBlocked /> : <ImEye />}
            </span>
          </span>
        </div>
        <div className={cx('group')}>
          <div className={cx('label')}>New Password</div>
          <span className={cx('inputSpan')}>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type={showPassword ? 'text' : 'password'}
              placeholder='At least 8 characters?'
              autoComplete='on'
            ></input>
            <span className={cx('show-password')} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <ImEyeBlocked /> : <ImEye />}
            </span>
          </span>
        </div>
        <div className={cx('group')}>
          <div className={cx('label')}>Confirm Password</div>
          <span className={cx('inputSpan')}>
            <input
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
              }}
              type={showConfirmPass ? 'text' : 'password'}
              placeholder='At least 8 characters?'
              autoComplete='on'
            ></input>
            <span
              className={cx('show-password')}
              onClick={() => setShowConfirmPass(!showConfirmPass)}
            >
              {showConfirmPass ? <ImEyeBlocked /> : <ImEye />}
            </span>
          </span>
        </div>
      </form>
      <ButtonComponent onClick={handleSubmit} className={cx('update-pass-btn')} primary>
        Update Password
      </ButtonComponent>
    </div>
  )
}

export default UserUpdatePass
