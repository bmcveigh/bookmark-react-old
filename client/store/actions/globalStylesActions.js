// Export Constants
export const SET_GLOBAL_STYLES = 'SET_GLOBAL_STYLES';
export const GET_USER_PREFERENCE_STYLES = 'GET_USER_PREFERENCE_STYLES';

export function setGlobalStyles(styles) {
  return (dispatch) => {
    return dispatch({
      type: SET_GLOBAL_STYLES,
      data: styles,
    });
  };
}

export function getUserPreferenceStyles(user) {
  return (dispatch) => {
    const preferences = user.preferences || {};
    const themeSettings = preferences.themeSettings || false;

    if (!themeSettings) {
      return;
    }

    const colors = themeSettings.colors.split(/,/g);

    dispatch({
      type: GET_USER_PREFERENCE_STYLES,
      data: {
        background: {
          background: colors[0],
        },
        button: {
          background: colors[1],
        },
        highlightColor: {
          ':hover': {
            background: colors[2],
          },
        },
      },
    });
  };
}
