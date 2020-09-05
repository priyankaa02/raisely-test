import { put, call, takeLatest } from 'redux-saga/effects'
import { notifyFn } from '../../helpers'
import { URL } from '../../constants'
import { fetchApi } from '../../api'
import { types as authTypes, actions as authActions } from './index'

function* checkEmailExistence(actionObj) {
  const { payload } = actionObj
  yield put(authActions.setLoading(true))
  try {
    const result = yield call(fetchApi, {
      url: URL.CHECK_EMAIL,
      method: 'POST',
      data: {
        campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
        data: {
          email: payload.email,
        },
      },
    })
    if (result.data && result.data.status === 'OK') {
      yield put(authActions.signupResponse(''))
      yield put(authActions.signup(payload))
    } else {
      notifyFn({ text: 'Email Already Exists, Please pick another' })
      yield put(authActions.setLoading(false))
    }
  } catch (e) {
    yield put(authActions.setLoading(false))
    if (e.error_description) {
      notifyFn({ text: e.error_description })
    } else {
      notifyFn({ text: 'Something went wrong, Please try again later' })
    }
  }
}

function* userSignup(actionObj) {
  const { payload } = actionObj
  yield put(authActions.setLoading(true))
  try {
    const result = yield call(fetchApi, {
      url: URL.SIGN_UP_URL,
      method: 'POST',
      data: {
        campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
        data: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          password: payload.password,
        },
      },
    })
    yield put(authActions.signupResponse(result.data))
    yield put(authActions.setLoading(false))
    notifyFn({
      text: 'Congrats!! you are now successfully registered with us :)',
    })
  } catch (e) {
    yield put(authActions.setLoading(false))
    if (e.error_description) {
      notifyFn({ text: e.error_description })
    } else {
      notifyFn({ text: 'Something went wrong, Please try again later' })
    }
  }
}

export default [
  takeLatest(authTypes.SIGN_UP, userSignup),
  takeLatest(authTypes.CHECK_EMAIL, checkEmailExistence),
]
