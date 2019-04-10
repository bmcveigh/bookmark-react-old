import { SET_ROUTE_PARAMS } from '../actions/routeParamsActions';

const initialState = {};

const routeParamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTE_PARAMS: {
      return action.data;
    }

    default: {
      return state;
    }
  }
};

export default routeParamsReducer;
