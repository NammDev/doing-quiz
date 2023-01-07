import classNames from 'classnames/bind'
import styles from './UserDropdown.module.scss'
import config from '~/config'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const cx = classNames.bind(styles)

function UserDropdown({ onLogout, account }) {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.languages[0]
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }
  return (
    <div className={cx('profile')}>
      <div className={cx('image')}></div>
      <ul className={cx('dropdown')}>
        <Link className={cx('dropdown-avatar')} to={config.routes.profile}>
          <div className={cx('dropdown-avatar-image')}>
            <div className={cx('image')}></div>
          </div>
          <div>
            <div className={cx('dropdown-avatar-username')}>{account.username}</div>
            <div className={cx('dropdown-avatar-email')}>{account.email}</div>
          </div>
        </Link>
        <li className={cx('dropdown-content')}>
          <span className={cx('dropdown-content-heading')}>Account</span>
          <a className={cx('dropdown-content-link')}>
            <div>Your settings</div>
          </a>
          <a className={cx('dropdown-content-link')} onClick={() => changeLanguage('en')}>
            <div style={currentLanguage === 'en' ? { fontWeight: '700' } : { fontWeight: '400' }}>
              {t('heading.language-en')}
            </div>
          </a>
          <a className={cx('dropdown-content-link')} onClick={() => changeLanguage('vn')}>
            <div style={currentLanguage === 'vn' ? { fontWeight: '700' } : { fontWeight: '400' }}>
              {t('heading.language-vn')}
            </div>
          </a>
        </li>
        <li className={cx('dropdown-content')}>
          <span className={cx('dropdown-content-heading')}>Resources</span>
          <a className={cx('dropdown-content-link')}>
            <div>Quick Help</div>
          </a>
          <a className={cx('dropdown-content-link')}>
            <div>Help Center</div>
          </a>
          <a className={cx('dropdown-content-link')}>
            <div>Ask the Community</div>
          </a>
          <a className={cx('dropdown-content-link')}>
            <div>What's new</div>
          </a>
        </li>
        <li className={cx('dropdown-logout')}>
          <div onClick={onLogout}>Log out</div>
        </li>
      </ul>
    </div>
  )
}

export default UserDropdown
