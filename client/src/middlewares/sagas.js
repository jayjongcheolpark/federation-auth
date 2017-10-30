import { all, call, takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED
} from '../actions/types'

function* fetchUser() {
  try {
    const res = yield call(axios.get, '/api/current_user')
    yield put({
      type: FETCH_USER_SUCCESS,
      payload: res
    })
  } catch (e) {
    yield put({
      type: FETCH_USER_FAILED
    })
  }
}

function* handleFetchUser() {
  yield takeEvery(FETCH_USER, fetchUser)
}

export default function* rootSaga() {
  yield all([
    handleFetchUser()
  ])
}