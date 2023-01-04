import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'
import videoHome from '~/assets/videos/homepage.mp4'
import Button from '~/components/Button'
import config from '~/config'
import { useTranslation } from 'react-i18next'

const cx = classNames.bind(styles)

function Home() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  const { t } = useTranslation()

  return (
    <>
      <div className={cx('home')}>
        <div className={cx('containerFlex')}>
          <div className={cx('containerGrid')}>
            <div className={cx('containerText')}>
              <h1>{t('home.heading')}</h1>
              <p>
                You don't want to make a boring form. And your audience won't answer one. Create a
                typeform instead—and make everyone happy.
              </p>
              <div className={cx('containerText-button')}>
                {isAuthenticated ? (
                  <Button to={config.routes.profile} primary className={cx('btn')}>
                    Doing Quiz Now
                  </Button>
                ) : (
                  <Button to={config.routes.login} primary className={cx('btn')}>
                    Get started - it's free
                  </Button>
                )}
              </div>
              <div className={cx('containerText-list')}>
                <ul className={cx('required-list')}>
                  <li className={cx('required-item')}>
                    <div className={cx('required-icon')}>✓</div>
                    <div className={cx('required-text')}>No credit card required</div>
                  </li>
                  <li className={cx('required-item')}>
                    <div className={cx('required-icon')}>✓</div>
                    <div className={cx('required-text')}>No time limit on Free plan</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('containerVideo')}>
          <video muted autoPlay loop playsInline className={cx('video')}>
            <source src={videoHome} type='video/mp4'></source>
          </video>
        </div>
      </div>
    </>
  )
}

export default Home
