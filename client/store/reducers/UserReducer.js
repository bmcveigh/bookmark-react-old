import { GET_USER, REGISTER_USER } from '../actions/UserActions';

// Initial State
const initialState = { data: {} };

const UserReducer = (state = initialState, action) => {
  switch (action.type) {

    case REGISTER_USER :
      return {
        data: [action.post, ...state.data],
      };

    case GET_USER:
      return action.user;

    default:
      return state;
  }
};


// Export Reducer
export default UserReducer;
