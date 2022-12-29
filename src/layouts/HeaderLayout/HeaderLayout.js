import { Header } from '../components'

function HeaderLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default HeaderLayout
