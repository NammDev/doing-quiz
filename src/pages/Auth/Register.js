import styles from './Login.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { Logo } from '~/assets/svg'
import ButtonComponent from '~/components/Button'
import config from '~/config'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className={cx('login')}>
      <div className={cx('login-top')}>
        <span className={cx('spanLink')}>Already have an account?</span>
        <ButtonComponent to={config.routes.login} className={cx('small-btn')}>
          Login
        </ButtonComponent>
      </div>
      <div className={cx('login-content')}>
        <div className={cx('login-brand')}>
          <Link className={cx('logo')} to={config.routes.home}>
            <Logo />
          </Link>
        </div>
        <main className={cx('auth')}>
          <div className={cx('auth-content')}>
            <form className={cx('form-login')}>
              <div className={cx('form-content')}>
                <h2 className={cx('form-head')}>
                  Get better data with conversational forms, surveys, quizzes & more.
                </h2>
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
                    I agree to Typeform's Terms of
                  </ButtonComponent>
                </div>
              </div>
              <div className={cx('form-footer')}>
                <input
                  type='submit'
                  className={cx('form-footer-btn')}
                  value='Create my free account'
                  id='signinSubmit'
                />
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Register
