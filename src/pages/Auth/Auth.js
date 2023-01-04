import styles from './Login.module.scss'
import classNames from 'classnames/bind'
import ButtonComponent from '~/components/Button'
import { useState } from 'react'
import { postLogin } from '~/services/auth'
import { toast } from 'react-toastify'
import { useNavigate, useLocation } from 'react-router-dom'
import config from '~/config'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { doLogin } from '~/redux/actions/userAction'
import { ImSpinner2 } from 'react-icons/im'
import queryString from 'query-string'

const cx = classNames.bind(styles)

function Auth() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const postApi = async () => {
    setIsLoading(true)
    const data = await postLogin(email, password)
    if (data && data.EC === 0) {
      dispatch(doLogin(data.DT))
      toast.success(data.EM)
      // Handle Successful Login
      const { redirectTo } = queryString.parse(location.search)
      navigate(redirectTo == null ? config.routes.home : redirectTo)
    } else {
      toast.error(data.EM)
    }
    setIsLoading(false)
  }

  const validate = (email, password) => {
    const isValidateEmail = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    const isValidatePassword = password
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
                    type={showPassword ? 'text' : 'password'}
                    autoComplete='on'
                    placeholder='At least 8 characters?'
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handleLogin()
                      }
                    }}
                  ></input>
                  <span
                    className={cx('show-password')}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <ImEyeBlocked /> : <ImEye />}
                  </span>
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
              left={isLoading && <ImSpinner2 />}
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
