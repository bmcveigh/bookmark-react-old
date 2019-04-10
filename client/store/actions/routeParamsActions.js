// Export Constants
export const SET_ROUTE_PARAMS = 'SET_ROUTE_PARAMS';

export function setParams(params) {
  return (dispatch) => {
    return dispatch({
      type: SET_ROUTE_PARAMS,
      data: params,
    });
  };
}
