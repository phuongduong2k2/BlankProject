import {all, fork} from 'redux-saga/effects';
import AppSaga from './AppSaga';

function* RootSaga() {
  yield all([fork(AppSaga)]);
}

export default RootSaga;
