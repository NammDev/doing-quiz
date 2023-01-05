import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes, adminRoutes, privateRoutes, PrivateRoute } from '~/routes'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import config from '~/config'
import { ToastContainer } from 'react-toastify'
import { Suspense } from 'react'

const cx = classNames.bind(styles)

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
                />
              )
            })}
            {privateRoutes.map((route, index) => {
              let Layout = route.layout
              const Page = route.component
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <PrivateRoute>
                      <Layout>
                        <Page />
                      </Layout>
                    </PrivateRoute>
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
        <ToastContainer autoClose={1200} />
      </Router>
    </Suspense>
  )
}

export default App
