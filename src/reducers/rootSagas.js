import { all } from 'redux-saga/effects'
import authSaga from './authReducer/authSaga'

export default function* sagas() {
  yield all([
    //
    ...authSaga,
  ])
}
