// Initial State
import { GET_TAB_DATA } from '../actions/tabDataActions';

const initialState = { data: {} };

const tabDataReducer = (state = initialState, action) => {
  if (action.type === GET_TAB_DATA) {
    return { data: action.data };
  }

  return state;
};


// Export Reducer
export default tabDataReducer;
