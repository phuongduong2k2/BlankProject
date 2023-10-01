const {combineReducers} = require('redux');
const {default: AppReducers} = require('./AppReducers');

const RootReducers = combineReducers({
  app: AppReducers,
});

export default RootReducers;
