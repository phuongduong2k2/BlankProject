const initialState = {
  config: '',
};

const AppReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONFIG':
      return {...state, config: action.payload};
    default:
      return {...state};
  }
};

export default AppReducers;
