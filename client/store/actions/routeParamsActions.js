// Export Constants
export const SET_ROUTE_PARAMS = 'SET_ROUTE_PARAMS';

/**
 * Set the parameters coming from the URL.
 *
 * For example, if the URL were /space/1,
 * params would be { id: 1 }.
 *
 * @param params
 * @returns {function(*): *}
 */
export function setParams(params) {
  return (dispatch) => {
    return dispatch({
      type: SET_ROUTE_PARAMS,
      data: params,
    });
  };
}
