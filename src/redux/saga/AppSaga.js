import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import BaseDA from '../../axios/BaseDA';

function* GetAllConfig() {
  try {
    // Call API
    yield put({type: 'SET_CONFIG', payload: 'this is config from api'});
  } catch (error) {
    // yield put({})
    // Failed
  }
}

function* GetData() {
  try {
    const data = yield BaseDA.get('https://dummyjson.com/carts');
    yield put({type: 'SET_DATA', payload: data.carts});
  } catch (error) {}
}

function* AppSaga() {
  yield takeLatest('GET_ALL_CONFIG', GetAllConfig);
  yield takeLatest('GET_DATA', GetData);
}

export default AppSaga;
