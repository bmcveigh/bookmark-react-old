import { GET_GOOGLE_USER } from '../actions/googleUserActions';

// Initial State
const initialState = { data: {} };

const googleUserReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_GOOGLE_USER:
      return action.data;

    default:
      return state;
  }
};


// Export Reducer
export default googleUserReducer;
