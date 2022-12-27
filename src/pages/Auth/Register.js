import styles from './Register.module.scss'
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
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className={cx('page')}>
      <section className={cx('register-bg')}>
        <div className={cx('register-bg-container')}>
          <h1 className={cx('register-bg-heading')}>
            Sign up
            <br />
            and come on in
          </h1>
          <div>
            <img
              src='https://www.typeform.com/static/images/signup-page/product-sample@1x.webp'
              alt='lazy'
            />
          </div>
          <p className={cx('register-bg-footer')}>© Typeform</p>
        </div>
      </section>
      <section className={cx('register')}>
        <div className={cx('grid')}>
          <div className={cx('register-top')}>
            <span className={cx('spanLink')}>Already have an account?</span>
            <ButtonComponent to={config.routes.login} className={cx('small-btn')}>
              Login
            </ButtonComponent>
          </div>
          <div className={cx('register-content')}>
            <div className={cx('register-brand')}>
              <Link className={cx('logo')} to={config.routes.home}>
                <Logo />
              </Link>
            </div>
            <main className={cx('auth')}>
              <div className={cx('auth-content')}>
                <form className={cx('form-login')}>
                  <h2 className={cx('form-head')}>
                    Get better data with conversational forms, surveys, quizzes & more.
                  </h2>
                  <div className={cx('form-content')}>
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
                      <label className={cx('form-checkbox')} htmlFor='term'>
                        <input
                          type='checkbox'
                          id='term'
                          name='term'
                          value='term'
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                        />
                        I agree to Typeform’s <u>Terms of Service</u>, <u>Privacy Policy</u> and{' '}
                        <u>Data Processing Agreement</u>.
                      </label>
                    </div>
                    <div className={cx('form-footer')}>
                      <input
                        type='submit'
                        className={cx('form-footer-btn')}
                        value='Create my free account'
                        id='signinSubmit'
                      />
                    </div>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
