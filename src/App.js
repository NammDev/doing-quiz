import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes, adminRoutes, privateRoutes, PrivateRoute } from '~/routes'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import { ToastContainer } from 'react-toastify'
import { Suspense } from 'react'
import AdminRoute from './routes/AdminRoute'
import { Admin } from '~/pages'
import config from '~/config'
import { SidebarLayout } from '~/layouts'

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
                />
              )
            })}
            <Route
              path={config.routes.admin}
              element={
                <PrivateRoute>
                  <AdminRoute>
                    <SidebarLayout>
                      <Admin />
                    </SidebarLayout>
                  </AdminRoute>
                </PrivateRoute>
              }
            >
              {adminRoutes.map((childRoute, i) => {
                const Manage = childRoute.component
                return <Route key={i} path={childRoute.path} element={<Manage />} />
              })}
            </Route>
          </Routes>
        </div>
        <ToastContainer autoClose={1200} />
      </Router>
    </Suspense>
  )
}

export default App
