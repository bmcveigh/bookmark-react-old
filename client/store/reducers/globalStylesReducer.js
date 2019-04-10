// Initial State
import { SET_GLOBAL_STYLES, GET_USER_PREFERENCE_STYLES } from '../actions/globalStylesActions';

const initialState = { data: {} };

const globalStylesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GLOBAL_STYLES: {
      const data = action.data;

      return {
        ...state,
        data,
      };
    }

    case GET_USER_PREFERENCE_STYLES: {
      return {
        ...state,
        userPreferenceStyles: action.data,
      };
    }

    default: {
      return state;
    }
  }
};


// Export Reducer
export default globalStylesReducer;
