// Initial State
import { GET_USER_PREFERENCE_STYLES } from '../actions/userPreferenceStylesActions';

const initialState = { data: {} };

const userPreferenceStylesReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_USER_PREFERENCE_STYLES: {
      return action.data;
    }

    default: {
      return state;
    }
  }
};


// Export Reducer
export default userPreferenceStylesReducer;
