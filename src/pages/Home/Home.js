import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import videoHome from '~/assets/videos/homepage.mp4'

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className='home'>
      <div className={cx('containerVideo')}>
        <video muted autoPlay loop playsInline className={cx('video')}>
          <source src={videoHome} type='video/mp4'></source>
        </video>
      </div>
    </div>
  )
}

export default Home
