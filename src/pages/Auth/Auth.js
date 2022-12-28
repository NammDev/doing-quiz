import styles from './Login.module.scss'
import classNames from 'classnames/bind'
import ButtonComponent from '~/components/Button'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className={cx('auth')}>
      <div className={cx('auth-content')}>
        <form className={cx('form-login')}>
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
            <input
              type='submit'
              className={cx('form-footer-btn')}
              value='Log in to Typeform'
              id='signinSubmit'
            />
          </div>
        </form>
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
