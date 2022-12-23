import classNames from 'classnames/bind'
import { Header } from '../components'
import styles from './MainLayout.module.scss'

const cx = classNames.bind(styles)

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MainLayout
