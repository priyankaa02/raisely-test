const name = 'authReducer'
export const types = {
  SIGN_UP: `${name}/SIGN_UP`,
  SIGN_UP_RESPONSE: `${name}/SIGN_UP_RESPONSE`,
  CHECK_EMAIL: `${name}/CHECK_EMAIL`,
  CHECK_EMAIL_RESPONSE: `${name}/CHECK_EMAIL_RESPONSE`,
  SET_LOADING: `${name}/SET_LOADING`,
}

const initialState = {
  signupResponse: '',
  checkEmailResponse: '',
  loading: false,
}

export const actions = {
  signup: (obj) => ({
    type: types.SIGN_UP,
    payload: obj,
  }),
  signupResponse: (res) => ({
    type: types.SIGN_UP_RESPONSE,
    payload: res,
  }),
  checkEmail: (email) => ({
    type: types.CHECK_EMAIL,
    payload: email,
  }),
  checkEmailResponse: (res) => ({
    type: types.CHECK_EMAIL_RESPONSE,
    payload: res,
  }),
  setLoading: (val) => ({
    type: types.SET_LOADING,
    payload: val,
  }),
}

export const selectors = {
  selectSignupResponse: (state) => state.auth.signupResponse,
  selectCheckEmailResponse: (state) => state.auth.checkEmailResponse,
  selectLoading: (state) => state.auth.loading,
}

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.CHECK_EMAIL:
    case types.SIGN_UP:
      return {
        ...state,
      }
    case types.CHECK_EMAIL_RESPONSE:
      return {
        ...state,
        checkEmailResponse: action.payload,
      }
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case types.SIGN_UP_RESPONSE:
      return {
        ...state,
        signupResponse: action.payload,
      }
    default:
      return state
  }
}
export default authReducer
