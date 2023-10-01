import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import RootReducers from '../reducers';
import RootSaga from '../saga';

const sagaMidle = createSagaMiddleware();

const store = configureStore({
  reducer: RootReducers,
  middleware: [sagaMidle],
});

sagaMidle.run(RootSaga);

export default store;
