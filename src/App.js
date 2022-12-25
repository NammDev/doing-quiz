import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes, adminRoutes } from '~/routes'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import config from '~/config'

const cx = classNames.bind(styles)

function App() {
  return (
    <Router>
      <div className={cx('app')}>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = route.layout
            const Page = route.component
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              >
                {route.path === config.routes.admin &&
                  adminRoutes.map((childRoute, i) => {
                    const Manage = childRoute.component
                    return <Route key={i} path={childRoute.path} element={<Manage />} />
                  })}
              </Route>
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
