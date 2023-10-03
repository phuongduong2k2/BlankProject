const initialState = {
  config: '',
  data: [],
};

const AppReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONFIG':
      return {...state, config: action.payload};
    case 'SET_DATA':
      return {...state, data: action.payload};
    default:
      return {...state};
  }
};

export default AppReducers;
