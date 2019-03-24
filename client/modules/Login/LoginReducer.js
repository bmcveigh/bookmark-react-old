import { REGISTER_USER } from './LoginActions';

// Initial State
const initialState = { data: [] };

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER :
      return {
        data: [action.post, ...state.data],
      };

    default:
      return state;
  }
};


// Export Reducer
export default LoginReducer;
