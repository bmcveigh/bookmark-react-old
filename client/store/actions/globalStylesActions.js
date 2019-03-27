// Export Constants
export const SET_GLOBAL_STYLES = 'SET_GLOBAL_STYLES';

export function setGlobalStyles(styles) {
  return (dispatch) => {
    return dispatch({
      type: SET_GLOBAL_STYLES,
      data: styles,
    });
  };
}
