// Initial State
import { SET_GLOBAL_STYLES } from '../actions/globalStylesActions';

const initialState = { data: {} };

const globalStylesReducer = (state = initialState, action) => {
  if (action.type === SET_GLOBAL_STYLES) {
    const data = action.data;

    return {
      ...state,
      data,
    };
  }

  return state;
};


// Export Reducer
export default globalStylesReducer;
