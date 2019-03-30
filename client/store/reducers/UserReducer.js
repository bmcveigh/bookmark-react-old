import { AUTHENTICATE_USER, GET_USER, REGISTER_USER, UPDATE_USER } from '../actions/UserActions';

// Initial State
const initialState = { data: {} };

const UserReducer = (state = initialState, action) => {
  switch (action.type) {

    case REGISTER_USER:
      return {
        data: [action.post, ...state.data],
      };

    case AUTHENTICATE_USER:
      if (localStorage && !localStorage.getItem('token') && action.user != null) {
        localStorage.setItem('token', action.user._id);
      }

      return action.user;

    case GET_USER:
    case UPDATE_USER:
      return action.user;

    default:
      return state;
  }
};


// Export Reducer
export default UserReducer;
