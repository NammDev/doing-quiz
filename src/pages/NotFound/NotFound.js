import styles from './NotFound.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function NotFound() {
  return (
    <div className={cx('error-page')}>
      <h1 className={cx('error-heading')}>Sorry, we couldn't find that page!</h1>
      <p className={cx('error-des')}>
        Back to{' '}
        <Link to='/' className={cx('error-back')}>
          typeform.com
        </Link>
      </p>
    </div>
  )
}

export default NotFound
