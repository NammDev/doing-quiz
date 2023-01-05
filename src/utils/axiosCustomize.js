import axios from 'axios'
import NProgress from 'nprogress'
import { doLogin } from '~/redux/actions/userAction'
import { postRefreshToken } from '~/services/auth'
import { store } from '~/redux/store'

NProgress.configure({ showSpinner: false, trickleSpeed: 100 })

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

const { dispatch } = store

// Add a request interceptor
instance.interceptors.request.use(
  // Do something before request is sentloca
  async (config) => {
    let authToken = store?.getState()?.user?.account?.access_token
    config.headers.Authorization = `Bearer ${authToken}`
    NProgress.start()
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    NProgress.done()
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response
  },
  async (error) => {
    NProgress.done()
    const originalRequest = error.config
    if (error.response.data && error.response.data.EC === -999) {
      originalRequest._retry = true

      // Get new access Token
      const email = store?.getState()?.user?.account?.email
      const refresh_token = store?.getState()?.user?.account?.refresh_token
      const data = await postRefreshToken(email, refresh_token)

      // Redux
      // dispatch(doLogin(data.DT))
      if (data && data.EC === 0) {
        dispatch(doLogin(data.DT))
      }

      return instance(originalRequest)
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error)
  }
)

export default instance
