export const FETCH_USER_LOGIN_SUCCESS = 'FETCH_USER_LOGIN_SUCCESS'
export const CLEAR_DATA_USER_LOGOUT_SUCCESS = 'CLEAR_DATA_USER_LOGOUT_SUCCESS'

export const doLogin = (data) => {
  return { type: FETCH_USER_LOGIN_SUCCESS, payload: data }
}

export const doLogout = () => {
  return { type: CLEAR_DATA_USER_LOGOUT_SUCCESS }
}
