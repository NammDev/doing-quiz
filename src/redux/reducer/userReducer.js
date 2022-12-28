import { FETCH_USER_LOGIN_SUCCESS } from '../actions/userAction'

const initialState = {
  isAuthenticated: false,
  account: {
    access_token: '',
    refresh_token: '',
    username: '',
    role: '',
    email: '',
    image: '',
  },
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        account: { ...payload },
      }
    }
    default:
      return state
  }
}

export default userReducer
