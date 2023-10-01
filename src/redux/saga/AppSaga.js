import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

function* GetAllConfig() {
  try {
    yield put({type: 'SET_CONFIG', payload: 'this is config from api'});
  } catch (error) {
    // yield put({})
    // Failed
  }
}

function* AppSaga() {
  yield takeLatest('GET_ALL_CONFIG', GetAllConfig);
}

export default AppSaga;
