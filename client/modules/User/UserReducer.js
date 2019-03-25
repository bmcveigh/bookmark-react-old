import { REGISTER_USER } from './UserActions';

// Initial State
const initialState = { data: [] };

const UserReducer = (state = initialState, action) => {
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
export default UserReducer;
