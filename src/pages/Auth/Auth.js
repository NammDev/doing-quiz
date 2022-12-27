import styles from './Login.module.scss'
import classNames from 'classnames/bind'
import ButtonComponent from '~/components/Button'

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
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  type='text'
                  placeholder='bruce@wayne.com'
                  className={cx('email')}
                ></input>
              </div>
              <div className={cx('group')}>
                <div className={cx('label')}>Password</div>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  type='password'
                  placeholder='At least 8 characters?'
                  className={cx('password')}
                ></input>
              </div>
            </div>
            <div className={cx('form-forgot')}>
              <ButtonComponent>Forgot password?</ButtonComponent>
            </div>
          </div>
          <div className={cx('form-footer')}>
            <ButtonComponent>Log in to Typeform</ButtonComponent>
          </div>
        </form>
        <div className={cx('google-login')}>
          <span>OR</span>
          <ButtonComponent>Log in with Google</ButtonComponent>
          <ButtonComponent>Log in with Micosoft</ButtonComponent>
          <ButtonComponent>Log in with SSO</ButtonComponent>
        </div>
      </div>
    </main>
  )
}

export default Auth
