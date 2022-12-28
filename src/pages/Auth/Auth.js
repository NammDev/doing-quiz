import styles from './Login.module.scss'
import classNames from 'classnames/bind'
import ButtonComponent from '~/components/Button'
import { useState } from 'react'
import { postLogin } from '~/services/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import config from '~/config'

const cx = classNames.bind(styles)

function Auth() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const postApi = async () => {
    const data = await postLogin(email, password)
    if (data && data.EC === 0) {
      toast.success(data.EM)
      navigate(config.routes.home)
    } else {
      toast.error(data.EM)
    }
  }

  const validate = (email, password) => {
    const isValidateEmail = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    const isValidatePassword = password
    if (!isValidateEmail) {
      toast.error('Invalid Email', { autoClose: 1000 })
    } else if (!isValidatePassword) {
      toast.error('Please enter password')
    }
    return isValidateEmail && isValidatePassword
  }

  const handleLogin = () => {
    validate(email, password) && postApi()
  }

  return (
    <main className={cx('auth')}>
      <div className={cx('auth-content')}>
        <div className={cx('form-login')}>
          <div className={cx('form-content')}>
            <h2 className={cx('form-head')}>Hello, who's this?</h2>
            <div className={cx('form-container')}>
              <div className={cx('group')}>
                <div className={cx('label')}>Email</div>
                <span className={cx('inputSpan')}>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    type='text'
                    placeholder='bruce@wayne.com'
                  ></input>
                </span>
              </div>
              <div className={cx('group')}>
                <div className={cx('label')}>Password</div>
                <span className={cx('inputSpan')}>
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    type='password'
                    placeholder='At least 8 characters?'
                  ></input>
                </span>
              </div>
            </div>
            <div className={cx('form-forgot')}>
              <ButtonComponent to='/' underline>
                Forgot password?
              </ButtonComponent>
            </div>
          </div>
          <div className={cx('form-footer')}>
            <ButtonComponent
              onClick={handleLogin}
              className={cx('form-footer-btn')}
              id='signinSubmit'
            >
              Log in to Typeform
            </ButtonComponent>
          </div>
        </div>
        <div className={cx('custom-login')}>
          <div className={cx('custom-login-or')}>
            <span>OR</span>
          </div>
          <ButtonComponent to='#' className={cx('custom-login-google')}>
            Log in with Google
          </ButtonComponent>
          <ButtonComponent to='#' className={cx('custom-login-mic')}>
            Log in with Micosoft
          </ButtonComponent>
          <ButtonComponent to='#' underline className={cx('custom-login-sso')}>
            Log in with SSO
          </ButtonComponent>
        </div>
      </div>
    </main>
  )
}

export default Auth
