import { Header } from '../components'

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MainLayout
